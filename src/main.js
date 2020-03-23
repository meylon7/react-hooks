import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Header from './header'
import Banner from './banner'
import Todo from './todo'
import Home from './home'

import './App.scss'
const App = (props) => (
  <Provider store={store}>
    <div>
      <Header />
      <Banner />
      <Home />
      <Todo />
    </div>  
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('main'));
