const router = require('express').Router();
const Post = require('../../models/Post');

router.get('/', async (req, res) => {
	try {
		const books = await Post.findAll();
		res.status(200).json(books);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const newBook = await Post.create({
			... req.body
		});
		res.status(200).json(newBook);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;