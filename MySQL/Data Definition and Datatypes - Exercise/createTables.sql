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



