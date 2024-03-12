-- seed file to contain each review data
USE book_review_db;

INSERT INTO Reviews (UserID, BookID, ReviewText, Rating, ReviewDate)
VALUES 
(1, 1, "It's a book.", 5, '2024-03-12'),
