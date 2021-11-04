/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './booksPage/Book';
import Form from './booksPage/Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const displayedBooks = [];
  const iterateBooks = () => {
    books.map((book) => {
      displayedBooks.push(
        <Book
          key={book[0]}
          id={book[0]}
          bookTitle={book[1][0].title}
          bookType={book[1][0].category}
          autherName="Ahmed Omar"
          percent="55%"
          chapter="Chapter 1"
        />,
      );
    });
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
