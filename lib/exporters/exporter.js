class Exporter {
  export() {
    throw new Error('Method "export" must be overriden!');
  }
}

module.exports = Exporter;
