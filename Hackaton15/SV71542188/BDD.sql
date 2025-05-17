CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  oauth_id VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  description VARCHAR(255),
  status VARCHAR(50), -- e.g. 'en tránsito', 'entregado'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE package_locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  package_id INT,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (package_id) REFERENCES packages(id)
);

CREATE TABLE package_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  package_id INT,
  user_id INT,
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (package_id) REFERENCES packages(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);