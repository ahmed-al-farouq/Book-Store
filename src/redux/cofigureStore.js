import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import booksReducer, {
  fetchBooksFailed, fetchBooksSucceed, postDataFailed, postDataSucceed, removeBook, startFetchBooks,
} from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export const getBooks = () => (dispatch) => {
  dispatch(startFetchBooks(true));
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books')
    .then((books) => {
      dispatch(fetchBooksSucceed(books.data));
    })
    .catch((err) => {
      dispatch(fetchBooksFailed(err));
    });
};
export const postBook = (newBook) => (dispatch) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books', newBook)
    .then((res) => {
      dispatch(postDataSucceed(res.data));
      dispatch(getBooks());
    })
    .catch((err) => {
      dispatch(postDataFailed(err));
    });
};
export const deletetBook = (id) => (dispatch) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AnQ6KvkQtjFMjmxqi9Wb/books/${id}`, id)
    .then((res) => {
      dispatch(removeBook(res.data));
      dispatch(getBooks());
    })
    .catch((err) => {
      dispatch(postDataFailed(err));
    });
};

store.dispatch(getBooks());
export default store;
