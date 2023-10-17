const utils = import('../../app/libs/utils.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { generateRandomData } = await utils;

    return queryInterface.bulkInsert('Cars', generateRandomData());
  },
  down: (queryInterface, Sequelize) => {
    // @ts-ignore
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
