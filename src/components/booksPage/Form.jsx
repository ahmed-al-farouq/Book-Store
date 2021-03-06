import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  FormContainer, FormTitle, StyledForm, BookTitleInput, StyledInput, SubmitInput, Error,
} from './styles/formStyle';
import { postBook } from '../../redux/cofigureStore';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const addNewBook = () => {
    const id = uuidv4();
    if (title.length && category.length) {
      dispatch(postBook(
        id,
        title,
        category,
      ));
      setTitle('');
      setCategory('');
    } else if (!title.length && !category.length) {
      setError('Please add book title, and category');
    } else if (!title.length) {
      setError('Please add book title');
    } else {
      setError('Please add book category');
    }
  };
  const handelTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handelCategoryChange = (e) => {
    setCategory(e.target.value);
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
        <StyledInput list="category" placeholder="Category" value={category} onChange={handelCategoryChange} />
        <datalist id="category">
          <option value="Action">Action</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Comic">Comic</option>
          <option value="Romantic">Romantic</option>
          <option value="Historical">Historical</option>
          <option value="Detective and Mystery">Detective and Mystery</option>
        </datalist>
        <SubmitInput type="button" value="ADD BOOK" onClick={addNewBook} />
        <Error>
          {error}
        </Error>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
