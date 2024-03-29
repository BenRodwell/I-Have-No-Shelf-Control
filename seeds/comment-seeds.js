const { Comment } = require('../models');

const commentData = [{
    comment_body: "Test comment 1",
    user_id: 1,
    review_id: 1
},
{
    comment_body: "Test comment 2",
    user_id: 2,
    review_id: 2
},
{
    comment_body: "Test comment 3",
    user_id: 3,
    review_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;




