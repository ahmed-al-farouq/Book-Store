/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  FormContainer, FormTitle, StyledForm, BookTitleInput, CategoriesInput, SubmitInput,
} from './styles/formStyle';

function Form() {
  return (
    <FormContainer>
      <FormTitle>ADD NEW BOOK</FormTitle>
      <StyledForm>
        <BookTitleInput type="text" placeholder="Book title" />
        <CategoriesInput list="categories" placeholder="Categories" />
        <datalist id="categories">
          <option value="Action" />
          <option value="Science Fiction" />
          <option value="Economy" />
        </datalist>
        <SubmitInput type="button" value="ADD BOOK" />
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
