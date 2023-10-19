/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn('Cars', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }),
      queryInterface.addColumn('Cars', 'createdBy', {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      }),
      queryInterface.addColumn('Cars', 'updatedBy', {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      }),
      queryInterface.addColumn('Cars', 'deletedBy', {
        allowNull: true,
        type: Sequelize.UUID,
        defaultValue: null,
        references: {
          model: 'Users',
          key: 'id'
        }
      })
    ]);
  },
  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn('Cars', 'createdBy'),
      queryInterface.removeColumn('Cars', 'deletedAt'),
      queryInterface.removeColumn('Cars', 'updatedBy'),
      queryInterface.removeColumn('Cars', 'deletedBy')
    ]);
  }
};
