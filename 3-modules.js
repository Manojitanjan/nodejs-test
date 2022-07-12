// Modules
// CommonJS, every file is module (by default) for eg: names.js
// Modules - Encapsulated Code (only share minimum)
const { manojit, somashree } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./5-alternative-flavours')
require('./7-mind-granades')
console.log(data);
console.log(names);
sayHi('Onka');
sayHi(manojit);
sayHi(somashree);