const Exporter = require('./exporter');
const json2csv = require('json2csv');

class CSVExporter extends Exporter {
  export(data, fields) {
    return json2csv({data, fields});
  }
}

module.exports = CSVExporter;
