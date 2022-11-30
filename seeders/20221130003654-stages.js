'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [
      { stage_name: 'Who Stage' },
      { stage_name: 'Which Stage' },
      { stage_name: 'What Stage' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {})
  }
};
