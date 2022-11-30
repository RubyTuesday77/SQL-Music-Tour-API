'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        name: 'Warped Festival',
        date: '2023-03-23T00:00:00',
        start_time: '2023-03-23T11:00:00',
        end_time: '2023-03-23T23:00:00'
      },
      {
        name: 'Ozzfest',
        date: '2023-03-23T00:00:00',
        start_time: '2023-03-23T11:00:00',
        end_time: '2023-03-23T23:00:00'
      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
