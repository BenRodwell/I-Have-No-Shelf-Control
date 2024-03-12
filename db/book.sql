-- seed file to contain books
USE book_review_db;

INSERT INTO Books (Title, Author, Year, Summary)
VALUES 
('Neuromancer', 'William Gibson', 1984, 'A seminal work in the cyberpunk genre, introducing the concept of cyberspace.'),
('Akira, Vol. 1', 'Katsuhiro Otomo', 1982, 'A dystopian saga set in post-apocalyptic Tokyo.'),
('Starship Troopers', 'Robert A. Heinlein', 1959, 'A military science fiction novel exploring themes of warfare and civic duty.'),
('Say Cheese and Die!', 'R.L. Stine', 1992, 'One of the classic books from the Goosebumps series.'),
('The Fellowship of the Ring', 'J.R.R. Tolkien', 1954, 'The first volume of The Lord of the Rings.');

-- book genre ID
INSERT INTO BookGenres (BookID, GenreID)
VALUES 
(1, 1), -- Neuromancer is Science Fiction
(2, 1), -- Akira, Vol. 1 is Science Fiction
(3, 1), -- Starship Troopers is Science Fiction
(4, 2), -- Say Cheese and Die! is Horror
(5, 3); -- The Fellowship of the Ring is Fantasy
