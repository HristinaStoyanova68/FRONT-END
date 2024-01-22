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

INSERT INTO movies(title, director_id, copyright_year,length, genre_id, category_id, rating, notes) VALUES 
('Black Widow', 1, '2000', 1, 1, 1, 1, 'test1'),
('Just Go With It', 2, '2000', 2, 2, 2, 2, 'test2'),
('Fair Play', 3, '2000', 3, 3, 3, 3, 'test3'),
('The Guilty', 4, '2000', 4, 4, 4, 4, 'test4'),
('The Notebook', 5, '2000', 5, 5, 5, 5, 'test5');

-- 12

CREATE DATABASE car_rental
DEFAULT CHARACTER SET = 'utf8mb4';

USE car_rental;

-- categories (id, category, daily_rate, weekly_rate, monthly_rate, weekend_rate)

CREATE TABLE categories(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    category VARCHAR(257), 
    daily_rate DOUBLE(6, 2), 
    weekly_rate DOUBLE(6, 2), 
    monthly_rate DOUBLE(6, 2), 
    weekend_rate DOUBLE(6, 2)
);

INSERT INTO categories (category, daily_rate, weekly_rate, monthly_rate, weekend_rate) VALUES
('Car', 1, 2, 3, 4),
('Bus', 1, 2, 3, 4),
('Van', 1, 2, 3, 4);

-- cars (id, plate_number, make, model, car_year, category_id, doors, picture, car_condition, available) 

CREATE TABLE  cars(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    plate_number VARCHAR(30) NOT NULL UNIQUE, 
    make VARCHAR(255) NOT NULL, 
    model VARCHAR(255) NOT NULL, 
    car_year DATE, 
    category_id INT, 
    doors INT, 
    picture BLOB, 
    car_condition VARCHAR(255), 
    available BOOLEAN
);

INSERT INTO cars(plate_number, make, model, car_year, category_id, doors, picture, car_condition, available) VALUES
('TX2020AX', 'BMW', '323', '1999-05-05', 1, 3, 'BEST', 'GOOD', true),
('TX2021AX', 'Lada', '325', '1999-05-06', 1, 3, 'BEST', 'GOOD', false),
('TX2022AX', 'Audi', '3', '1999-05-07', 1, 3, 'BEST', 'GOOD', true);

-- employees (id, first_name, last_name, title, notes)

CREATE TABLE employees(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
first_name VARCHAR(80) NOT NULL, 
last_name VARCHAR(80) NOT NULL, 
title VARCHAR(80) NOT NULL, 
notes TEXT
);

INSERT INTO employees(first_name, last_name, title, notes) VALUES
 ('Ivan', 'Ivanov', 'Mr', 'test'),
 ('Ivanka', 'Ivanova', 'Mrs', 'test'),
 ('Ivana', 'Ivanov', 'Mrs', 'test');


 -- customers (id, driver_licence_number, full_name, address, city, zip_code, notes)
 
 CREATE TABLE customers(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    driver_licence_number INT NOT NULL UNIQUE, 
    full_name VARCHAR(80) NOT NULL, 
    address VARCHAR(80) NOT NULL, 
    city VARCHAR(80) NOT NULL, 
    zip_code VARCHAR(80) NOT NULL, 
    notes TEXT
 );
 
 INSERT INTO customers(driver_licence_number, full_name, address, city, zip_code, notes) VALUES
 (123, 'Stoyanova Hristina', 'Dobrich1', 'Dobrich', '9300', 'test'),
 (124, 'Stoyanov Georgi', 'Dobrich2', 'Dobrich', '9300', 'test'),
 (125, 'Stoyanova Mama', 'Dobrich1', 'Dobrich', '9300', 'test');

 -- rental_orders (id, employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes)
 
 CREATE TABLE rental_orders(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    employee_id INT NOT NULL, 
    customer_id INT NOT NULL, 
    car_id INT NOT NULL, 
    car_condition VARCHAR(80) NOT NULL, 
    tank_level INT, 
    kilometrage_start INT, 
    kilometrage_end INT , 
    total_kilometrage INT, 
    start_date DATE, 
    end_date DATE, 
    total_days INT, 
    rate_applied DOUBLE(6, 2), 
    tax_rate DOUBLE(6, 2), 
    order_status BOOLEAN, 
    notes TEXT
 );
 
 INSERT INTO rental_orders (employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes) VALUES
 (1, 1, 1, 'GOOD', 100, 1111, 2222, 3333, '2022-05-05','2022-05-06', 1, 1.2, 2.2, true, 'test'),
 (2, 2, 2, 'GOOD', 100, 1111, 2222, 3333, '2022-05-05','2022-05-06', 1, 1.2, 2.2, true, 'test'),
 (3, 3, 3, 'GOOD', 100, 1111, 2222, 3333, '2022-05-05','2022-05-06', 1, 1.2, 2.2, true, 'test');

--  13

 CREATE DATABASE soft_uni
 DEFAULT CHARACTER SET = 'utf8mb4';
 
 USE soft_uni;

 -- towns (id, name)
 
 CREATE TABLE towns(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
 );
 
 INSERT INTO towns(name) VALUE 
 ('Sofia'),
 ('Plovdiv'), 
 ('Varna'),
 ('Burgas');

-- addresses (id, address_text, town_id)

CREATE TABLE addresses(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    address_text VARCHAR(255) NOT NULL,
    town_id INT NOT NULL
 );
 
 INSERT INTO addresses(address_text, town_id) VALUES 
 ('Lulin1', 1),
 ('Lulin2', 2), 
 ('Lulin3', 3),
 ('Lulin4', 4);

-- departments (id, name)

CREATE TABLE departments(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
 );
 
 INSERT INTO departments(name) VALUE 
 ('Engineering'),
 ('Sales'), 
 ('Marketing'),
 ('Software Development'),
 ('Quality Assurance');

-- employees (id, first_name, middle_name, last_name, job_title, department_id, hire_date, salary, address_id)

CREATE TABLE employees(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(80) NOT NULL, 
    middle_name VARCHAR(80), 
    last_name VARCHAR(80) NOT NULL, 
    job_title VARCHAR(80) NOT NULL, 
    department_id INT NOT NULL, 
    hire_date DATE, 
    salary DOUBLE, 
    address_id INT 
);

INSERT INTO employees(first_name, middle_name, last_name, job_title, department_id, hire_date, salary, address_id) VALUES 
('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00, 1),
('Peter', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00, 2),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25, 3),
('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00, 4),
('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88, 1);

UPDATE employees
SET first_name = 'Petar'
WHERE id = 2;

-- 14

SELECT * FROM towns;
SELECT * FROM departments;
SELECT * FROM employees;

-- 15

SELECT * FROM towns ORDER BY name ASC;
SELECT * FROM departments ORDER BY name ASC;
SELECT * FROM employees ORDER BY salary DESC;

-- 16

SELECT name FROM towns ORDER BY name ASC;
SELECT name FROM departments ORDER BY name ASC;
SELECT first_name, last_name, job_title, salary FROM employees ORDER BY salary DESC;

-- 17

UPDATE employees
SET salary = salary * 1.1;
SELECT salary FROM employees;






