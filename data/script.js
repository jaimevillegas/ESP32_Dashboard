// Get current sensor readings when the page loads  
window.addEventListener('load', getReadings);

const x = document.getElementById("gps");
const velocity = document.getElementById("velocity");
const getLocationButton = document.getElementById("get-location-button");
const locationInfo = document.getElementById("location-info");

// odometer = document.getElementById("odometer");
// odometer.innerHTML = 990;
// setTimeout(function () {
//   odometer.innerHTML = 1000;
// }, 1000);

// Create Temperature Gauge
var gaugeTemp = new LinearGauge({
  renderTo: 'gauge-temperature',
  width: 100,
  height: 300,
  units: "Temp C",
  fontUnits: 24,
  colorUnits: "white",
  minValue: 0,
  valueBox: false,
  startAngle: 90,
  ticksAngle: 180,
  // barShadow: 9,
  maxValue: 160,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
    "0",
    "20",
    "40",
    "60",
    "80",
    "100",
    "120",
    "140",
    "160"
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 100,
      "color": "#03c0c1"
    },
    {
      "from": 100,
      "to": 160,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  colorBarProgress: "white",
  colorBarProgressEnd: "blue",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 4,
  needleCircleSize: 6,
  needleCircleOuter: false,
  needleCircleInner: true,
  colorNeedleCircleInner: "red",
  animationDuration: 1000,
  animationRule: "bounce",
  barWidth: 15,
  colorNumbers: "white",
  fontNumbersSize: 25,
  fontNumbersStyle: "Bold",
}).draw();

var gaugeGasolina = new LinearGauge({
  renderTo: 'gauge-gasolina',
  width: 80,
  height: 300,
  units: "Temp C",
  fontUnits: 24,
  colorUnits: "white",
  minValue: 0,
  valueBox: false,
  startAngle: 90,
  ticksAngle: 180,
  // barShadow: 9,
  maxValue: 160,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
    "0",
    "50",
    "100",
    "150",
    "200",
    "250"
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 100,
      "color": "#03c0c1"
    },
    {
      "from": 100,
      "to": 160,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  colorBarProgress: "white",
  colorBarProgressEnd: "blue",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 4,
  needleCircleSize: 6,
  needleCircleOuter: false,
  needleCircleInner: true,
  colorNeedleCircleInner: "red",
  animationDuration: 1000,
  animationRule: "bounce",
  barWidth: 15,
  colorNumbers: "white",
  fontNumbersSize: 25,
  fontNumbersStyle: "Bold",
}).draw();

var gaugeAire1 = new LinearGauge({
  renderTo: 'gauge-aire1',
  width: 80,
  height: 300,
  units: "Temp C",
  fontUnits: 24,
  colorUnits: "white",
  minValue: 0,
  valueBox: false,
  startAngle: 90,
  ticksAngle: 180,
  // barShadow: 9,
  maxValue: 160,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
    "0",
    "50",
    "100",
    "150",
    "200",
    "250"
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 100,
      "color": "#03c0c1"
    },
    {
      "from": 100,
      "to": 160,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  colorBarProgress: "white",
  colorBarProgressEnd: "blue",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 4,
  needleCircleSize: 6,
  needleCircleOuter: false,
  needleCircleInner: true,
  colorNeedleCircleInner: "red",
  animationDuration: 1000,
  animationRule: "bounce",
  barWidth: 15,
  colorNumbers: "white",
  fontNumbersSize: 25,
  fontNumbersStyle: "Bold",
}).draw();



var gaugeAire2 = new LinearGauge({
  renderTo: 'gauge-aire2',
  width: 80,
  height: 300,
  units: "Temp C",
  fontUnits: 24,
  colorUnits: "white",
  minValue: 0,
  valueBox: false,
  startAngle: 90,
  ticksAngle: 180,
  // barShadow: 9,
  maxValue: 160,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
    "0",
    "50",
    "100",
    "150",
    "200",
    "250"
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 100,
      "color": "#03c0c1"
    },
    {
      "from": 100,
      "to": 160,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  colorBarProgress: "white",
  colorBarProgressEnd: "blue",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 4,
  needleCircleSize: 6,
  needleCircleOuter: false,
  needleCircleInner: true,
  colorNeedleCircleInner: "red",
  animationDuration: 1000,
  animationRule: "bounce",
  barWidth: 15,
  colorNumbers: "white",
  fontNumbersSize: 25,
  fontNumbersStyle: "Bold",
}).draw();


// Create Humidity Gauge
var gaugeVelocity = new RadialGauge({
  renderTo: 'gauge-velocity',
  width: 220,
  height: 220,
  units: "km/h",
  minValue: 0,
  maxValue: 240,

  colorValueBoxRect: "transparent",
  colorNeedle: "red",
  colorNeedleEnd: "red",
  colorValueBoxRectEnd: "#049faa",
  colorNeedleCircleOuter: "#007F80",
  colorNumbers: "white",
  // colorValueBoxBackground: "transparent",

  valueBox: false,
  valueInt: 2,
  majorTicks: [
    "0",
    "20",
    "40",
    "60",
    "80",
    "100",
    "120",
    "140"
  ],
  minorTicks: 10,
  strokeTicks: true,
  highlights: [
    {
      "from": 0,
      "to": 170,
      "color": "#03C0C1"
    },
    {
      "from": 170,
      "to": 240,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  borders: true,
  borderOuterWitdh: 0,
  borderShadowWidth: 0,
  borderMiddleWidth: 0,
  borderInnerWidth: 0,
  colorBorderOuter: "#3B3B39",
  colorBorderOuterEnd: "#3B3B39",

  fontNumbersSize: 20,
  fontNumbersStyle: "Bold",

  needleType: "line",
  needleWidth: 4,
  needleCircleSize: 22,
  needleCircleOuter: true,
  needleCircleInner: false,

  animationDuration: 1500,
  animationRule: "linear"
}).draw();


var gaugeRPM = new RadialGauge({

  renderTo: 'gauge-rpm',
  width: 220,
  height: 220,
  units: "X1000 RPM",
  minValue: 0,
  maxValue: 8,

  colorValueBoxRect: "transparent",
  colorNeedle: "red",
  colorNeedleEnd: "red",
  colorValueBoxRectEnd: "#049faa",
  colorNeedleCircleOuter: "#007F80",
  colorNumbers: "white",
  // colorValueBoxBackground: "transparent",

  valueBox: false,
  valueInt: 2,
  majorTicks: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"

  ],
  minorTicks: 10,
  strokeTicks: true,
  highlights: [
    {
      "from": 0,
      "to": 6.5,
      "color": "#03C0C1"
    },
    {
      "from": 6.5,
      "to": 8,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  borders: true,
  borderOuterWitdh: 0,
  borderShadowWidth: 0,
  borderMiddleWidth: 0,
  borderInnerWidth: 0,
  colorBorderOuter: "#3B3B39",
  colorBorderOuterEnd: "#3B3B39",

  fontNumbersSize: 20,
  fontNumbersStyle: "Bold",

  needleType: "line",
  needleWidth: 4,
  needleCircleSize: 22,
  needleCircleOuter: true,
  needleCircleInner: false,

  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var gaugeVolts = new RadialGauge({

  renderTo: 'gauge-volts',
  width: 150,
  height: 150,
  units: "Volts",
  minValue: 0,
  maxValue: 20,

  colorValueBoxRect: "transparent",
  colorNeedle: "red",
  colorNeedleEnd: "red",
  colorValueBoxRectEnd: "#049faa",
  colorNeedleCircleOuter: "#007F80",
  colorNumbers: "white",

  valueBox: false,
  valueInt: 2,
  valueDec: 1,
  majorTicks: [
    "0",
    "6",
    "8",
    "10",
    "12",
    "16",
    "20"

  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 10,
      "color": "#F5E510"
    },
    {
      "from": 10,
      "to": 14,
      "color": "green"
    },
    {
      "from": 14,
      "to": 20,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  borders: true,
  borderOuterWitdh: 0,
  borderShadowWidth: 0,
  borderMiddleWidth: 0,
  borderInnerWidth: 0,
  colorBorderOuter: "#3B3B39",
  colorBorderOuterEnd: "#3B3B39",



  fontNumbersSize: 20,
  fontNumbersStyle: "Bold",

  needleType: "line",
  needleWidth: 4,
  needleCircleSize: 22,
  needleCircleOuter: true,
  needleCircleInner: false,

  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var gaugeAceite = new RadialGauge({

  renderTo: 'gauge-aceite',
  width: 150,
  height: 150,
  units: "PSI",
  minValue: 0,
  maxValue: 150,

  colorValueBoxRect: "transparent",
  colorNeedle: "red",
  colorNeedleEnd: "red",
  colorValueBoxRectEnd: "#049faa",
  colorNeedleCircleOuter: "#007F80",
  colorNumbers: "white",
  // colorValueBoxBackground: "transparent",

  valueBox: false,
  valueInt: 2,
  valueDec: 1,
  majorTicks: [
    "0",
    "50",
    "70",
    "90",
    "110",
    "130",
    "150"

  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    {
      "from": 0,
      "to": 120,
      "color": "green"
    },
    {
      "from": 120,
      "to": 150,
      "color": "red"
    }
  ],
  colorPlate: "transparent",
  borders: true,
  borderOuterWitdh: 0,
  borderShadowWidth: 0,
  borderMiddleWidth: 0,
  borderInnerWidth: 0,
  colorBorderOuter: "#3B3B39",
  colorBorderOuterEnd: "#3B3B39",



  fontNumbersSize: 20,
  fontNumbersStyle: "Bold",

  needleType: "line",
  needleWidth: 4,
  needleCircleSize: 22,
  needleCircleOuter: true,
  needleCircleInner: false,

  animationDuration: 1500,
  animationRule: "linear"
}).draw();



// Function to get current readings on the webpage when it loads for the first time
function getReadings() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      var temp = myObj.temperature;
      var gas = myObj.gasolina;
      var aire1 = myObj.aire1;
      var aire2 = myObj.aire2;
      var velocity = myObj.velocity;
      var rpm = myObj.rpm;
      var volts = myObj.volts;
      var aceite = myObj.aceite;
      gaugeTemp.value = temp;
      gaugeGasolina.value = gas;
      gaugeAire1.value = aire1;
      gaugeAire2.value = aire2;
      gaugeVelocity.value = velocity;
      gaugeRPM.value = rpm;
      gaugeVolts.value = volts;
      gaugeAceite.value = aceite;
    }
  };
  xhr.open("GET", "/readings", true);
  xhr.send();
}

if (!!window.EventSource) {
  var source = new EventSource('/events');

  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN) {
      console.log("Events Disconnected");
    }
  }, false);

  source.addEventListener('message', function(e) {
    console.log("message", e.data);
  }, false);

  source.addEventListener('new_readings', function(e) {
    console.log("new_readings", e.data);
    var myObj = JSON.parse(e.data);
    console.log(myObj);
    gaugeTemp.value = myObj.temperature;
    gaugeGasolina.value = myObj.gasolina;
    gaugeAire1.value = myObj.aire1;
    gaugeAire2.value = myObj.aire2;
    gaugeVelocity.value = myObj.velocity;
    gaugeRPM.value = myObj.rpm;
    gaugeVolts.value = myObj.volts;
    gaugeAceite.value = myObj.aceite;
  }, false);
}

