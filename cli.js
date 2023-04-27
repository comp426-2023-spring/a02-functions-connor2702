#!/usr/bin/env node

import "minimist";
import "node-fetch";
import "moment-timezone";

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

const latitude = 0;
const longitude = 0;

if (argument.n) {
    const latitude = argument.n;
} else if (argument.s) {
    const latitude = -(argument.s);
}

if (argument.e) {
    const longitude = argument.e;
} else if (argument.w) {
    const longitude = -(argument.w);
}

const timezone = moment.tz.guess();


const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitude + '&longitude=' + longitude + '&daily=precipitation_hours&timezone=' + timezone);
const data = await response.json();


if (argument.j) {
    console.log(data);
    process.exit(0);
}




const days = argument.d; 
if (days == 0) {
  console.log("today.");
} else if (days > 1) {
  console.log("in " + days + " days.");
} else {
  console.log("tomorrow.");
}