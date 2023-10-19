/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { generateRandomCar } = await import('../../libs/utils.js');

    return queryInterface.bulkInsert('Cars', await generateRandomCar());
  },
  down: (queryInterface, Sequelize) => {
    // @ts-ignore
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
