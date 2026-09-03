CREATE TABLE users (
	  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  	name TEXT,
  	email TEXT,
  	created_at DATE
  );
  
INSERT INTO users (name, email, created_at) VALUES ('Ana', 'ana@email.com', '2024-01-01'), 
  													('Pedro', 'pedro@email.com', '2024-02-01'), 
                                                    ('Maria', 'maria@email.com', '2024-02-15');

SELECT * FROM users ORDER BY created_at DESC;
