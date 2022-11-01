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
    await queryInterface.bulkInsert("Photos", [{
      title: "Foto nomor 1 milik user 1",
      caption: "Foto nomor 1 ini milik user 1",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOTaay-dr-ts-og3G7ZiLILEAQO93tddgM9Q&usqp=CAU",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Foto nomor 2 milik user 1",
      caption: "Foto nomor 1 ini milik user 1",
      image_url: "https://cdn.medcom.id/images/library/images/Sepatu%20berpola.jpg",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: "Foto nomor 3 milik user 1",
      caption: "Foto nomor 1 ini milik user 1",
      image_url: "https://api-lotte.hollacode.com/api/static/inspirasi/1645713947183-7-fungsi-jam-dinding,-selain-menunjukkan-waktu---hero.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }])
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
