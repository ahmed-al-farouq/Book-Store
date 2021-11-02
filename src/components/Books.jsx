import React from 'react';
import styled from 'styled-components';
import Book from './booksPage/Book';
import Form from './booksPage/Form';

const Hr = styled.hr`
  width: 86rem;
  border: solid 1px #e8e8e8;
  margin: 2.5rem auto 1.813rem auto;
`;

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
      <Hr />
      <Form />
    </section>
  );
}

export default Books;
