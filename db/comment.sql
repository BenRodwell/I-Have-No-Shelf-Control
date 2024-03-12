-- seed file to contain each comment data

USE book_review_db;

INSERT INTO Comments (ReviewID, UserID, CommentText, CommentDate)
VALUES 
(1, 1, "It is a book indeec", '2024-03-12'),
