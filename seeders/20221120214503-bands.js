'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bands", [
      {
        band_id: 1,
        name: "Windmill Noise Cancer",
        genre: "Punk",
        available_start_time: "2023-02-23T11:00:00",
        end_time: "2023-02-23T23:00:00",
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {});
  }
};
