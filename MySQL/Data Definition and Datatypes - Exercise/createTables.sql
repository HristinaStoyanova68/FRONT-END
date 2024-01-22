CREATE DATABASE minions;
USE minions;

-- 1

CREATE TABLE minions(
	id INT AUTO_INCREMENT,
    name VARCHAR(80),
    age INT,
    PRIMARY KEY (id)
);

CREATE TABLE towns(
	town_id INT AUTO_INCREMENT,
    name VARCHAR(255),
    
    PRIMARY KEY (town_id)
);

ALTER TABLE towns
DROP COLUMN town_id;

ALTER TABLE towns
ADD COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

-- 2

ALTER TABLE minions
ADD COLUMN town_id INT;

ALTER TABLE minions 
ADD CONSTRAINT fk_town_id FOREIGN KEY (town_id) REFERENCES towns(id);

-- 3

INSERT INTO towns(id, name)
VALUE (1, 'Sofia'),
(2, 'Plovdiv'),
(3, 'Varna');

INSERT INTO minions(id, name, age, town_id)
VALUES (1, 'Kevin', 22, 1),
(2, 'Bob', 15, 3),
(3, 'Steward', NULL, 2);

-- 4

TRUNCATE TABLE minions;

-- 5

DROP TABLE minions;
DROP TABLE towns;

-- 6

CREATE TABLE people(
	id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	picture BLOB,
    height DOUBLE(6, 2),
    weight DOUBLE(6, 2),
    gender CHAR(1) NOT NULL,
    birthdate DATE NOT NULL,
    biography BLOB
);

INSERT INTO people(id, name, picture, height, weight, gender, birthdate, biography) 
VALUES (1, 'Ivan', 'test', 1.89, 95.5, 'm', '1976-05-01', 'test'), 
(2, 'Peter', 'test', 1.89, 95.5, 'm', '1976-05-02', 'test'),
(3, 'Georgi', 'test', 1.89, 95.5, 'm', '1976-05-03', 'test'),
(4, 'Maya', 'test', 1.89, 95.5, 'f', '1976-05-04', 'test'),
(5, 'Nana', 'test', 1.89, 95.5, 'f', '1976-05-05', 'test');

-- 7

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(26) NOT NULL,
    profile_picture BLOB,
    last_login_time DATETIME,
    is_deleted BOOLEAN
);

INSERT INTO users (id, username, password, profile_picture, last_login_time, is_deleted) 
VALUES (1, 'Ivan', '123456', 'test', '1976-05-01', true),
(2, 'Peter', '123456','test', '1976-05-02', true),
(3, 'Georgi', '123456','test', '1976-05-03', true),
(4, 'Maya', '123456','test', '1976-05-04', true),
(5, 'Nana', '123456','test', '1976-05-05', true);

-- 8

ALTER TABLE users
DROP PRIMARY KEY,
ADD PRIMARY KEY(id, username);

-- 9

ALTER TABLE users
CHANGE last_login_time last_login_time DATETIME DEFAULT NOW();

-- 10

ALTER TABLE users
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users
PRIMARY KEY users(id),
CHANGE COLUMN username
username VARCHAR(30) UNIQUE;

-- 11

CREATE DATABASE movies;
	DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE directors(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    director_name VARCHAR(80) NOT NULL,
    notes VARCHAR(257)
);

INSERT INTO directors (director_name, notes) VALUES
('Peter1', 'test1'),
('Peter2', 'test2'),
('Peter3', 'test3'),
('Peter4', 'test4'),
('Peter5', 'test5');

CREATE TABLE genres(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(80) NOT NULL,
    notes VARCHAR(257)
);

INSERT INTO genres (genre_name, notes) VALUES
('ACTION', 'test1'),
('COMEDY', 'test2'),
('DRAMA', 'test3'),
('THRILLER', 'test4'),
('ROMANTIC', 'test5');

CREATE TABLE categories(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(80) NOT NULL,
    notes VARCHAR(257)
);

INSERT INTO categories(category_name, notes) VALUES
('military','test1'),
('childish','test2'),
('historical','test3'),
('fun','test4'),
('adventurous','test5');

CREATE TABLE movies(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    director_id INT NOT NULL, 
    copyright_year YEAR, 
    length DOUBLE(10, 2), 
    genre_id INT NOT NULL, 
    category_id INT NOT NULL, 
    rating DOUBLE(3,2), 
    notes VARCHAR(257)
);

INSERT INTO movies(title, director_id, copyright_year,length, genre_id, category_id, rating, notes) VALUE 
('Black Widow', 1, '2000', 1, 1, 1, 1, 'test1'),
('Just Go With It', 2, '2000', 2, 2, 2, 2, 'test2'),
('Fair Play', 3, '2000', 3, 3, 3, 3, 'test3'),
('The Guilty', 4, '2000', 4, 4, 4, 4, 'test4'),
('The Notebook', 5, '2000', 5, 5, 5, 5, 'test5');









