CREATE DATABASE IF NOT EXISTS product_app;
USE product_app;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  price DECIMAL(10,2),
  quantity INT,
  serial_no VARCHAR(255)
);
