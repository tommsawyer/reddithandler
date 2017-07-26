const CSVExporter = require('./csv_exporter');
const SQLExporter = require('./sql_exporter');

module.exports = {
  SQL: new SQLExporter(),
  CSV: new CSVExporter()
};
