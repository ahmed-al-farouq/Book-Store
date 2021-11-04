/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './booksPage/Book';
import Form from './booksPage/Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const displayedBooks = [];
  const iterateBooks = () => {
    for (const book in books) {
      if (Object.prototype.hasOwnProperty.call(books, book)) {
        displayedBooks.push(
          <Book
            bookType={books[book][0].category}
            bookTitle={books[book][0].title}
            autherName="Ahmed Omar"
            percent="64%"
            chapter="Chapter"
            key={book}
            id={book}
          />,
        );
      }
    }
  };
  return (
    <section style={{ marginBottom: '12rem' }}>
      {iterateBooks()}
      {
        displayedBooks.length ? displayedBooks
          : <h2 style={{ textAlign: 'center', color: '#888888', height: '150px' }}>Please Add Some Books</h2>
      }
      <hr />
      <Form />
    </section>
  );
};

export default Books;
