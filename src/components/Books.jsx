import React from 'react';
import Book from './booksPage/Book';
import Form from './booksPage/Form';

function Books() {
  return (
    <section style={{ marginBottom: '12rem' }}>
      <Book
        bookType="Action"
        bookTitle="The Hunger Games"
        autherName="Suzanne Collins"
        percent="64%"
        chapter="Chapter 17"
      />
      <Book
        bookType="Science Fiction"
        bookTitle="Dune"
        autherName="Suzanne Collins"
        percent="64%"
        chapter="Chapter 17"
      />
      <Book
        bookType="Economy"
        bookTitle="The Hunger Games"
        autherName="Suzanne Collins"
        percent="64%"
        chapter="Chapter 17"
      />
      <hr />
      <Form />
    </section>
  );
}

export default Books;
