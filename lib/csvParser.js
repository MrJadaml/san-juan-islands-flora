'use strict';

const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'plant-list.csv');
const seedDataPath = path.join(__dirname, 'seed-data-garden.json');

const buildRows = data => {
  return data.map(index => {
    const arr = index.split(',');
    const sciName = arr[0];
    const sciNameLastChar = sciName[arr[0].length - 1];

    const isNative = (sciName) => {
      return sciNameLastChar === '*';
    }

    const cleanSciName = (sciName) => {
      return sciNameLastChar === '*' ? sciName.substring(0, sciName.length - 1) : sciName;
    }

    const row = {
      sci_name: cleanSciName(sciName),
      common_name: arr[1],
      family_name: arr[2],
      is_native: isNative(sciName),
    }

    return row;
  });
};

const writeIt = jsonData => {
  fs.writeFile(seedDataPath, jsonData, err => {
    if (err) throw err;
    console.log('🌱  Flora seeds data ready to plant in DB! 🌱');
  });
};

fs.readFile(csvPath, 'utf-8', (err, csvString) => {
  let csvRows = csvString.split('\r\n');
  csvRows.shift();
  const plantsData = buildRows(csvRows);
  const jsonPlants = JSON.stringify(plantsData);
  writeIt(jsonPlants);
});
