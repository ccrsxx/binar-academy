const Models = import('../../api/models/index.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { User } = await Models;

    // await User.destroy({
    //   where: {
    //     username: 'emilia'
    //   }
    // })

    // const newUser = await User.create({
    //   name: 'Emilia',
    //   role: 'superadmin',
    //   image: 'https://i.imgur.com/1zYdY7I.jpg',
    //   username: 'emilia',
    //   password: 'Emilia-tan',
    //   email: 'emilia@tan.com'
    // });

    const defaultId = 'c14b7f12-22e9-4f49-a854-d39f6d77d529';

    await Promise.all([
      queryInterface.addColumn('Cars', 'createdBy', {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: defaultId,
        references: {
          model: 'Users',
          key: 'id'
        }
      }),
      queryInterface.addColumn('Cars', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
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
      queryInterface.removeColumn('Cars', 'deletedBy')
    ]);
  }
};
