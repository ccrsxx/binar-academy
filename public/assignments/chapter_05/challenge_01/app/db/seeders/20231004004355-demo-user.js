/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { generateRandomUser } = await import('../../libs/seed.js');

    return queryInterface.bulkInsert('Users', generateRandomUser());
  },
  down: (queryInterface, Sequelize) => {
    // @ts-ignore
    return queryInterface.bulkDelete('Users', null, {});
  }
};
