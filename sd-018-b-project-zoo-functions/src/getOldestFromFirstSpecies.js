const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const zooEmployee = employees.find((employee) => employee.id === id);
  const animal = zooEmployee.responsibleFor[0];
  const firstSpecie = species.find((name) => name.id === animal);
  let oldest = 0;
  let getOldest = [];
  firstSpecie.residents.forEach((residente) => {
    if (residente.age > oldest) {
      oldest = residente.age;
      getOldest = [];
      getOldest.push(residente.name);
      getOldest.push(residente.sex);
      getOldest.push(residente.age);
    }
  });
  return getOldest;
}

module.exports = getOldestFromFirstSpecies;
