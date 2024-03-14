const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Post = require('./Post');
const Comment = require('./Comment');

// ================== gallery ===================== //

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

// ================== posting ===================== //

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "cascade"
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

Post.hasOne(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

// https://sequelize.org/docs/v6/core-concepts/assocs/

// HasOne 
// BelongsTo 
// HasMany 
// BelongsToMany 



module.exports = { User, Gallery, Painting, Post, Comment };
