import pkg from './models/index.js';

const { User } = await pkg;

User.bulkCreate([
  { firstName: 'Emilia', lastName: 'Tan' },
  { firstName: 'Rem', lastName: 'Rin' }
]).then(void 0);

User.findAll().then(console.log);
