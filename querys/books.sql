-- ========== 1. Relación Muchos a Uno (Many-to-One) ==========
-- Crear tabla Authors

CREATE TABLE Authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Crear tabla Books con una relación muchos a uno hacia Authors
CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES Authors(id)
);

-- Insertar datos de ejemplo
INSERT INTO Authors (name) VALUES ('J.K. Rowling'), ('George R.R. Martin');
INSERT INTO Books (title, author_id) VALUES ('Harry Potter', 1), ('A Song of Ice and Fire', 2);
INSERT INTO Books (title, author_id) VALUES ('New Book', 1), ('Old Book', 2);

SELECT * FROM Authors;
SELECT * FROM Books;


-- ========== 2. Relación Uno a Muchos (One-to-Many) ==========
-- Puedes simplemente consultar los autores y los libros que han escrito
SELECT Authors.name AS author, Books.title AS book
FROM Authors
JOIN Books ON Authors.id = Books.author_id;


-- ========== 3. Relación Muchos a Muchos (Many-to-Many) ==========
-- Crear tabla Categories
CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Crear tabla intermedia Books_Categories
CREATE TABLE Books_Categories (
    book_id INT,
    category_id INT,
    PRIMARY KEY (book_id, category_id),
    FOREIGN KEY (book_id) REFERENCES Books(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

-- Insertar datos de ejemplo en Categories
INSERT INTO Categories (name) VALUES ('Fantasy'), ('Adventure');

-- Insertar datos en la tabla intermedia
INSERT INTO Books_Categories (book_id, category_id) VALUES (1, 1), (2, 1), (1, 2);

-- Consultar libros y sus categorías
SELECT Books.title AS book, Categories.name AS category
FROM Books
JOIN Books_Categories ON Books.id = Books_Categories.book_id
JOIN Categories ON Categories.id = Books_Categories.category_id;
