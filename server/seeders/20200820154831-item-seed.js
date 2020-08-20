'use strict';

let seed = require('../item-seed.json')
seed = seed.map(el=>{
  el.createdAt = new Date();
  el.updatedAt = new Date();
  return el
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', seed, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
