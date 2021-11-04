const REMOVE_BOOK = 'REMOVE_BOOK';
const START_FETCHING_BOOKS = 'START_FETCHING_BOOKS';
const FETCH_BOOKS_SUCCEED = 'FETCH_BOOKS_SUCCEED';
const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_SUCCEED';
const POST_DATA_SUCCEED = 'POST_DATA_SUCCEED';
const POST_DATA_FAILD = 'POST_DATA_FAILD';
const initialState = {
  loading: false,
  error: '',
  books: {},
};

export const startFetchBooks = (payload) => ({
  type: START_FETCHING_BOOKS,
  payload,
});

export const fetchBooksSucceed = (payload) => ({
  type: FETCH_BOOKS_SUCCEED,
  payload,
});

export const fetchBooksFailed = (payload) => ({
  type: FETCH_BOOKS_FAILED,
  payload,
});

export const postDataSucceed = () => ({
  type: POST_DATA_SUCCEED,
});

export const postDataFailed = (payload) => ({
  type: POST_DATA_FAILD,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_BOOKS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCEED:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_DATA_SUCCEED:
      return {
        ...state,
        message: action.payload,
      };
    case POST_DATA_FAILD:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_BOOK:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
