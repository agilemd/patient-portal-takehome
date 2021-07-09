const fs = require('fs');
const path = require('path');

function getStore() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/patients.json')).toString());
}

function get(id) {
  return getStore().find((p) => p.id === id);
}

module.exports = { get };
