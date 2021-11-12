import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer, {
  addBook,
  fetchBooks,
  removeBook,
} from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export const getBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books')
    .then((res) => res.json())
    .then((data) => dispatch(fetchBooks(Object.entries(data))))
    .catch((err) => err);
};

export const postBook = (id, title, category) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books', {
    method: 'POST',
    body: JSON.stringify({ item_id: id, title, category }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      res.text();
      dispatch(addBook([id, [{ title, category }]]));
    })
    .catch((err) => err);
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.text())
    .then(() => dispatch(removeBook(id)))
    .catch((err) => err);
};
export default store;
