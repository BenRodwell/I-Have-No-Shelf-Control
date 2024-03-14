const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');
const seedReviews = require('./review-seeds');
const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();
  await seedPaintings();
  await seedUsers();
  await seedReviews();
  await seedComments();

  process.exit(0);
};

seedAll();
