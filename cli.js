#!/usr/bin/env node

const minimist = require('minimist');
const moment = require('moment');

const argument = minimist(process.argv.slice(2));


if (argument.h) {
    console.log(`Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
        -h            Show this help message and exit.
        -n, -s        Latitude: N positive; S negative.
        -e, -w        Longitude: E positive; W negative.
        -z            Time zone: uses tz.guess() from moment-timezone by default.
        -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
        -j            Echo pretty JSON from open-meteo API and exit.`);
    process.exit(0);
}


const timezone = moment.tz.guess();





const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.875&longitude=-79.0&daily=precipitation_hours&temperature_unit=fahrenheit&timezone=America%2FNew_York');
const data = await response.json();






const days = argument.d 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}