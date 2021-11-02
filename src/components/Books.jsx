import React from 'react';
import { useSelector } from 'react-redux';
import Book from './booksPage/Book';
import Form from './booksPage/Form';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <section style={{ marginBottom: '12rem' }}>
      {
        books.length
          ? (
            books.map((book) => (
              <Book
                bookType="Action"
                bookTitle={book.title}
                autherName={book.author}
                percent="64%"
                chapter="Chapter 17"
                key={book.id}
                id={book.id}
              />
            ))
          )
          : <h2 style={{ textAlign: 'center', color: '#888888', height: '150px' }}>Please Add Some Books</h2>
      }
      <hr />
      <Form />
    </section>
  );
}

export default Books;
