const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Art',
  },
  {
    name: 'Autobiography',
  },
  {
    name: 'Automotive',
  },
  {
    name: 'Biography',
  },
  {
    name: 'Business',
  },
  {
    name: 'Childrens',
  },
  {
    name: 'Christian',
  },
  {
    name: 'Classics',
  },
  {
    name: 'Comics',
  },
  {
    name: 'Cookbooks',
  },
  {
    name: 'Fantasy',
  },
  {
    name: 'Fiction',
  },
  {
    name: 'History',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Music',
  },
  {
    name: 'Mystery',
  },
  {
    name: 'Nonfiction',
  },
  {
    name: 'Poety',
  },
  {
    name: 'Romance',
  },
  {
    name: 'Science',
  },
  {
    name: 'Science Fiction',
  },
  {
    name: 'Self Help',
  },
  {
    name: 'Sports',
  },
  {
    name: 'Thriller',
  },
  {
    name: 'Travel',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
