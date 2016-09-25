const fs = require('fs');

const buildRows = data => {
  return data.map(index => {
    const arr = index.split(',');
    const row = {
      sci_name: arr[0],
      common_name: arr[1],
      family_name: arr[2],
      native: arr[0][arr[0].length - 1] !== '*',
    };

    return row;
  });
};

const writeIt = jsonData => {
  fs.writeFile('./seedDataGarden.json', jsonData, err => {
    if (err) throw err;
    console.log('🌱  Flora seeds data ready to plant in DB! 🌱');
  });
};

fs.readFile('./plant-list.csv', 'utf-8', (err, data) => {
  const csvRows = csvString.split('\r\n');
  csvRows.pop();
  const plantsData = buildRows(csvRows);
  const jsonPlants = JSON.stringify(plantsData);
  writeIt(jsonPlants);
});
