const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryInterface.bulkInsert('companies', [{
    //   trading_name: 'Açai da Barra',
    //   company_name: 'Açai da Barra',
    //   password: await bcrypt.hash('123456', 8),
    //   email: 'guieiti42@gmail.com',
    //   phone_ddd: '11',
    //   phone_number: '99955-2318',
    //   cnpj: '199647702319',
    //   street: 'Rua',
    //   number: 5,
    //   district: 'Centro',
    //   city: 'Londrina',
    //   state: 'PR',
    //   complement: '',
    //   zipcode: '08739490',
    //   is_admin: false,
    //   has_delivery: false,
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // }], {});

    return queryInterface.bulkInsert('companies', [{
      trading_name: 'Empresa X',
      company_name: 'Empresa X',
      password: await bcrypt.hash('admin', 8),
      email: 'admin@admin.com',
      phone_ddd: '11',
      phone_number: '99955-2318',
      cnpj: '199647702319',
      street: 'Rua',
      number: 5,
      district: 'Centro',
      city: 'Londrina',
      state: 'PR',
      complement: '',
      zipcode: '08739490',
      is_admin: true,
      has_delivery: false,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', {
      is_admin: true,
    }, {});
  },
};
