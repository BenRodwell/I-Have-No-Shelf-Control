const router = require('express').Router();

const userRoutes = require('./user-routes');
const addBooks = require("./add_book-routes");

router.use("/addBooks", addBooks);
router.use('/users', userRoutes);

module.exports = router;
