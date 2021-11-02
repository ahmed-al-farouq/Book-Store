/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FormContainer, FormTitle, StyledForm, BookTitleInput, CategoriesInput, SubmitInput,
} from './styles/formStyle';
import { addBook } from '../../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const addNewBook = () => {
    const newBook = {
      id: 1,
      title: 'a',
      author: 'awe',
    };
    dispatch(addBook(newBook));
  };

  return (
    <FormContainer>
      <FormTitle>ADD NEW BOOK</FormTitle>
      <StyledForm>
        <BookTitleInput type="text" placeholder="Book title" />
        <CategoriesInput list="categories" placeholder="Categories" />
        <datalist id="categories">
          <option value="Action" label="action" />
          <option value="Science Fiction" label="science fiction" />
          <option value="Economy" label="economy" />
        </datalist>
        <SubmitInput type="button" value="ADD BOOK" onClick={addNewBook} />
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
