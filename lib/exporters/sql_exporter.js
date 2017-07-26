const Exporter = require('./exporter');

class SQLExporter extends Exporter {
  formatField(topic, column) {
    const field = topic[column];

    if (typeof field === 'number') {
      return field;
    }

    return `"${field}"`;
  }

  export(data, fields, tableName) {
    const columns = fields.join(', ');

    return data.map(topic => {
      const values = fields.map(column => this.formatField(topic, column)).join(',');

      return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
    }).join('\n');
  }
}

module.exports = SQLExporter;
