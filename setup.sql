CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY,
                                    name VARCHAR(255));

INSERT INTO people (name) VALUES ('Pedro');
INSERT INTO people (name) VALUES ('Jose');
INSERT INTO people (name) VALUES ('Thyago');