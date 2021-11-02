import styled from 'styled-components';

const FormContainer = styled.div`
  width: 75rem;
  margin: 2.313rem 6.25rem 0;
`;

const FormTitle = styled.h2`
  margin: 1.813rem 0 1.188rem 2.75rem;
  font-family:  'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.18px;
  color: #888;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-item: center;
  margin-bottom: 30px;
`;

const BookTitleInput = styled.input`
  width: 42.5rem;
  height: 1.813rem;
  margin: 1.188rem 2.125rem 0;
  padding: 0.375rem 0.938rem 0.563rem 1rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  outline: none;
`;

const CategoriesInput = styled.input`
  width: 17.813rem;
  height: 1.813rem;
  margin: 1.188rem 2.125rem 0;
  padding: 0.375rem 0.938rem 0.563rem 1rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  outline: none;
`;

const SubmitInput = styled.input`
  width: 11.5rem;
  height: 2.813rem;
  margin: 1.188rem 0 0 2.125rem;
  padding: 0.801rem 1.188rem 0.886rem 1.375rem;
  font-family: 'Roboto Slab', serif;
  text-transform: uppercase;
  font-size: 0.813rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: #0290ff;
  cursor: pointer;
`;

export {
  FormContainer, FormTitle, StyledForm, BookTitleInput, CategoriesInput, SubmitInput,
};
