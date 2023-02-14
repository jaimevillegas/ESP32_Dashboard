#include <Arduino.h>
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include "SPIFFS.h"
#include <Arduino_JSON.h>
// #include <WiFiClient.h>
// #include <WiFiAP.h>

const char* ssid = "DASHBOARD";
const char* password = "123456789";

// WiFiServer server(80);
AsyncWebServer server(80);

// Create an Event Source on /events
AsyncEventSource events("/events");

// JSON Variable to Hold Sensor Readings
JSONVar readings;

// Timer variables
unsigned long lastTime = 0;
unsigned long timerDelay = 1000;  // INTENTAR REDUCIR ESTE VALOR AL MÁXIMO

// I/O Configuration
#define AIN1 35
#define AIN2 34
#define AIN3 32
#define AIN4 33
#define AIN5 36
#define AIN6 39

// Get Sensor Readings and return JSON object
String getSensorReadings() {
  readings["temperature"] = String(analogRead(AIN1));
  readings["humidity"] = String(analogRead(AIN2));
  String jsonString = JSON.stringify(readings);
  return jsonString;
}

// Initialize SPIFFS
void initSPIFFS() {
  if (!SPIFFS.begin()) {
    Serial.println("An error has occurred while mounting SPIFFS");
  }
  Serial.println("SPIFFS mounted successfully");
}




void setup() {
  Serial.begin(115200);
  initSPIFFS();

  // PinMode
  pinMode(AIN1, INPUT);
  pinMode(AIN2, INPUT);
  pinMode(AIN3, INPUT);
  pinMode(AIN4, INPUT);
  pinMode(AIN5, INPUT);
  pinMode(AIN6, INPUT);

  // Connect to WiFi
  Serial.println();
  Serial.print("Configuring Access Point: ");
  Serial.println(ssid);

  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();

  Serial.print("IP Address to access webserver: ");
  Serial.print("http://");
  Serial.println(myIP);

  server.begin();
  Serial.println("Webserver Started!");

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/index.html", "text/html");
  });

  server.serveStatic("/", SPIFFS, "/");

  // Request for the latest sensor readings
  server.on("/readings", HTTP_GET, [](AsyncWebServerRequest *request){
    String json = getSensorReadings();
    request->send(200, "application/json", json);
    json = String();
  });

  events.onConnect([](AsyncEventSourceClient *client) {
    if(client->lastId()) {
      Serial.printf("Client reconnected! Last message ID that it got is: %u\n", client->lastId());
    }
    // Send event with message "hello!', id current millis
    // and set reconnect delay to 1 second
    client->send("hello!", NULL, millis(), 1000); // AQUÍ TAMBIÉN TRATAR DE REDUCIR TIEMPO
  }) ;

  server.addHandler(&events);

  // Start server
  server.begin();
}

void loop() {
  // Check if a client has connected...
  // WiFiClient client = server.available();
  // if (!client) {
  //   return;
  // }

  // Serial.print("New Client! --> ");
  // Serial.println(client.remoteIP());

  if ((millis() - lastTime) > timerDelay) {
    // Send Events to the client with the Sensor Readings Every 10 seconds
    events.send("ping", NULL, millis());
    events.send(getSensorReadings().c_str(),"new_readings", millis());
    lastTime = millis();
  }

}