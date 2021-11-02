import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  FormContainer, FormTitle, StyledForm, BookTitleInput, BookAuthorInput, SubmitInput, Error,
} from './styles/formStyle';
import { addBook } from '../../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const addNewBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    if (title.length && author.length) {
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    } else if (!title.length && !author.length) {
      setError('Please add book title & author');
    } else if (!author.length) {
      setError('Please add book author');
    } else {
      setError('Please add book title');
    }
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <FormContainer>
      <FormTitle>ADD NEW BOOK</FormTitle>
      <StyledForm>
        <BookTitleInput
          type="text"
          placeholder="Book title"
          onChange={handelTitleChange}
          value={title}
        />
        <BookAuthorInput
          type="text"
          placeholder="Book auther"
          onChange={handelAuthorChange}
          value={author}
        />
        <SubmitInput type="button" value="ADD BOOK" onClick={addNewBook} />
        <Error>
          {error}
        </Error>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
