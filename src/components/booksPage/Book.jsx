import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import CircularProgressBar from './CircularProgressBar';

const BookDiv = styled.div`
  width: 75rem;
  height: 7.625rem;
  margin: 2.313rem 6.25rem 0;
  padding: 2rem 9.188rem 1.625rem 1.688rem;
  border-radius: 4px;
  border: solid 1px #e8e8e8;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-item: center
`;

const LeftSection = styled.div`
  width: 20%;
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
`;
const Percent = styled.h4`
  margin: 10px;
  font-size: 1.5rem;
  color: #121212;
`;

const CompletedText = styled.span`
  margin: 10px;
  opacity: 0.5;
  font-size: 0.875rem;
  color: #121212;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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
  height: 2.063rem;
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

function Book({
  bookType,
  bookTitle,
  autherName,
  percent,
  chapter,
}) {
  return (
    <BookDiv>
      <LeftSection>
        <div>
          <BookType>{bookType}</BookType>
          <BookTitle>{bookTitle}</BookTitle>
          <AutherName>{autherName}</AutherName>
        </div>
        <Ul>
          <Li>
            Comments
          </Li>
          <Li>
            Remove
          </Li>
          <Li>
            Edit
          </Li>
        </Ul>
      </LeftSection>
      <MiddleSection>
        <CircularProgressBar />
        <div>
          <Percent>{percent}</Percent>
          <CompletedText>Completed</CompletedText>
        </div>
      </MiddleSection>
      <RightSection>
        <CurrentChapterText>Current Chapter</CurrentChapterText>
        <ChapterText>{chapter}</ChapterText>
        <UpdateProgressButton type="button">
          update progress
        </UpdateProgressButton>
      </RightSection>
    </BookDiv>
  );
}

Book.propTypes = {
  bookType: propTypes.string.isRequired,
  bookTitle: propTypes.string.isRequired,
  autherName: propTypes.string.isRequired,
  percent: propTypes.number.isRequired,
  chapter: propTypes.string.isRequired,
};

export default Book;
