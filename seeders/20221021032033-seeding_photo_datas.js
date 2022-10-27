'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Photos', [{
      title: "Foto nomor 1",
      caption: "Foto nomor 1 ini ceritanya berisi foto pemandangan gunung",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Pemandangan_Gunung_Bromo.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Foto nomor 2",
      caption: "Foto nomor 2 ini ceritanya berisi foto pemandangan laut",
      image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.azhan.co%2Fpemandangan-pantai-cantik-dengan-tema-pokok-kelapa%2F&psig=AOvVaw2sk3BwHY0nkgDK7QG0CUNh&ust=1666873266403000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMDD3q3Q_PoCFQAAAAAdAAAAABAJ",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  {
      title: "Foto nomor 3",
      caption: "Foto nomor 2 ini ceritanya berisi foto pemandangan sunrise",
      image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.idntimes.com%2Fhype%2Ffun-fact%2Frully-bunga%2F20-pemandangan-sunrise-dari-berbagai-belahan-dunia-ini-begitu-indah&psig=AOvVaw0rDRzd734ZExJZFS25-9bJ&ust=1666873415392000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCOoPPQ_PoCFQAAAAAdAAAAABAJ",
      createdAt: new Date(),
      updatedAt: new Date(),
  }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
