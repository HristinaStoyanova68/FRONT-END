CREATE DATABASE minions;
USE minions;

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

ALTER TABLE minions
ADD COLUMN town_id INT;

ALTER TABLE minions 
ADD CONSTRAINT fk_town_id FOREIGN KEY (town_id) REFERENCES towns(id);

