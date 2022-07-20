function buildTranslation(rawData) {
  const traduction = {};
  rawData.forEach((row) => {
    if (!traduction[row.ref]) {
      traduction[row.ref] = {};
    }
    traduction[row.ref].id = row.id;
    traduction[row.ref][row.language_code] = row.body;
  });
  return traduction;
}

module.exports = buildTranslation;
