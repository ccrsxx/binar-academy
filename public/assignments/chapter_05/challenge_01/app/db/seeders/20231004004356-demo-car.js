const utils = import('../../libs/utils.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { generateRandomCar } = await utils;

    return queryInterface.bulkInsert('Cars', generateRandomCar());
  },
  down: (queryInterface, Sequelize) => {
    // @ts-ignore
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
