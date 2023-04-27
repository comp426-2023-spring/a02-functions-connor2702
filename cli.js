#!/usr/bin/env node

const minimist = require('minimist');
const moment = require('moment');
const argument = minimist(process.argv.slice(2));

const timezone = moment.tz.guess();





const response = await fetch('URL_GOES_HERE');

const data = await response.json();






const days = args.d 

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}