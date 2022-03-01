const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesReturn = [];
  if (ids === undefined) {
    return [];
  }

  ids.forEach((id) => {
    const selectedSpecies = data.species.find((species) => species.id === id);
    speciesReturn.push(selectedSpecies);
  });

  return speciesReturn;
}

module.exports = getSpeciesByIds;
