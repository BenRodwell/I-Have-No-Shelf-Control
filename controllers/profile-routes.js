const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// ============================== GET user's posts ============================ //

router.get('/', withAuth, async (req, res) => {
    try {
      const userPostData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'user_id', 'title', 'content', 'created_at'],
      });
  
      const posts = userPostData.map(post => post.get({plain : true})
      );
      res.render('profile', {
        posts, loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// ============================== GET all user's posts ============================ //

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const userPostData = await Post.findOne({
            where: {
                user_id: req.params.id
            },
            attributes: ['id', 'user_id', 'title', 'content', 'created_at'],
            include: [{
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'user_id', 'post_id', 'comment_body', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username']
                },
            },
        ],
      });
      const posts = userPostData.get({ plain: true });
res.render('edit-post', { posts, loggedIn: true });      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// ============================== GET all user's posts ============================ //


router.get('/new', (req, res) => {
    res.render('new-post');
});



module.exports = router;