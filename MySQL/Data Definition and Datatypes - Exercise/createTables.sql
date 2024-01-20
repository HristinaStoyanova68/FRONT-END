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

