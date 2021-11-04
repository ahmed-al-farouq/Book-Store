import styled from 'styled-components';

const BookDiv = styled.div`
  flex-wrap: wrap;
  padding: 2rem 2rem 1.625rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-item: center;
  @media (max-width: 768px) {
    margin: 2.313rem auto 0;
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftSection = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const BookType = styled.span`
  margin: 0;
  opacity: 0.5;
  font-family:  'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  color: #121212;
`;

const BookTitle = styled.h3`
  margin: 0.188rem 0 0 0;
  font-family: 'Roboto Slab', serif;
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: #121212;
`;

const AutherName = styled.span`
  margin: 0.25rem 0 0;
  font-family: 'Roboto Slab', serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: #4386bf;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-left: 0;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Li = styled.li`
  margin: 0.188rem 0.938rem 0.125rem 0;
  font-family: 'Roboto Slab', serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: #4386bf;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    display: inline;
    margin: 0 1.063rem 0 0.938rem;
    border: solid 2px #e8e8e8;
    background: #e8e8e8;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family:  'Montserrat', sans-serif;
  margin: 0.5rem auto;
`;

const Percent = styled.h4`
  margin: 20px;
  font-size: 1.5rem;
  color: #121212;
`;

const CompletedText = styled.span`
  margin: 20px;
  opacity: 0.5;
  font-size: 0.875rem;
  color: #121212;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1.5rem;
  }
`;

const CurrentChapterText = styled.span`
  opacity: 0.5;
  font-family: 'Roboto Slab', serif;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 300;
  color: #121212;
  margin: 0.438rem 0 0.25rem 0;
`;

const ChapterText = styled.span`
  font-family: 'Roboto Slab', serif;
  margin: 0.438rem 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: -0.4px;
  color: #121212;
`;

const UpdateProgressButton = styled.button`
  width: 11.5rem;
  font-family: 'Roboto Slab', serif;
  text-transform: uppercase;
  font-size: 0.813rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-align: center;
  color: #fff;
  margin: 0.75rem 0 0.563rem 0;
  padding: 0.438rem 1.188rem 0.5rem 1.375rem;
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: #0290ff;
  cursor: pointer;
`;

export {
  BookDiv,
  LeftSection,
  BookType,
  BookTitle,
  AutherName,
  Ul,
  Li,
  MiddleSection,
  Percent,
  CompletedText,
  RightSection,
  CurrentChapterText,
  ChapterText,
  UpdateProgressButton,
};
