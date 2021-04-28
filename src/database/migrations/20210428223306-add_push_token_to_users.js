module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'push_token', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'push_token'),
    ]);
  },
};
