import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgressBar from './CircularProgressBar';
import {
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
} from './styles/bookStyle';
import { removeBook } from '../../redux/books/books';

function Book({
  bookType,
  bookTitle,
  autherName,
  percent,
  chapter,
}) {
  const dispatch = useDispatch();

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
          <Li onClick={() => dispatch(removeBook())}>
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
  percent: propTypes.string.isRequired,
  chapter: propTypes.string.isRequired,
};

export default Book;
