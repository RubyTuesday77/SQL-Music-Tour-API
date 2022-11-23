'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", [
      {
        event_id: 1,
        name: "Warped Festival",
        date: "2023-02-23T11:00:00",
        start_time: "2023-02-23T11:00:00",
        end_time: "2023-02-23T23:00:00"
      },
      {
        event_id: 2,
        name: "Ozzfest",
        date: "2023-02-28T11:00:00",
        start_time: "2023-02-28T11:00:00",
        end_time: "2023-02-28T23:00:00"
      }
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
