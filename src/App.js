import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import { getBooks } from './redux/cofigureStore';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </BrowserRouter>
  );
};

export default App;
