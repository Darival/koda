import gasLp from './montacargas-combustion-gas-lpg.js';
import diesel from './montacargas-combustion-diesel.js';
import montacargasElectrico from './montacargas-electrico.js';

const categories = [
  gasLp,
  diesel,
  montacargasElectrico
];

const getCategory = (id) => {
  return categories.find(category => category.id === id);
}

export {
  getCategory
}