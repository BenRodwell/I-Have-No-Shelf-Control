-- Drop the existing database if it exists and create a new one
DROP DATABASE IF EXISTS book_review_db;
CREATE DATABASE book_review_db;
USE book_review_db;

-- Creating the Users table to store user information
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Country VARCHAR(255),
    FavouriteGenre VARCHAR(255),
    AvatarURL VARCHAR(255)
);

-- Creating the Genres table to store book genres
CREATE TABLE Genres (
    GenreID INT AUTO_INCREMENT PRIMARY KEY,
    GenreName VARCHAR(255) UNIQUE NOT NULL
);

-- Creating the Books table to store books
CREATE TABLE Books (
    BookID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(255),
    Year YEAR,
    Summary TEXT
);

-- Creating a junction table for many-to-many relationship between Books and Genres
CREATE TABLE BookGenres (
    BookID INT,
    GenreID INT,
    PRIMARY KEY (BookID, GenreID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (GenreID) REFERENCES Genres(GenreID)
);

-- Creating the Reviews table to store reviews made by users for books
CREATE TABLE Reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    BookID INT,
    ReviewText TEXT,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    ReviewDate DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

-- Creating the Favorites table to store the users' favorite books
CREATE TABLE Favorites (
    UserID INT,
    BookID INT,
    PRIMARY KEY (UserID, BookID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

-- Creating the ToRead table to store the books users want to read
CREATE TABLE ToRead (
    UserID INT,
    BookID INT,
    PRIMARY KEY (UserID, BookID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

-- Creating the Comments table for comments on reviews
CREATE TABLE Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    ReviewID INT,
    UserID INT,
    CommentText TEXT,
    CommentDate DATE,
    FOREIGN KEY (ReviewID) REFERENCES Reviews(ReviewID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Creating the Messages table for storing messages from the contact form
CREATE TABLE Messages (
    MessageID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    MessageText TEXT NOT NULL,
    SentDate DATE NOT NULL
);
