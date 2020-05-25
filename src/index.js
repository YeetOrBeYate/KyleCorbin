import React from 'react';
import ReactDOM from 'react-dom';
import '../src/custom.scss';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//Redux packages

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

//reducers

import {ProjectReducer} from "./Reducers/Portfolio"
import {TagsReducer} from "./Reducers/Tags"
import {ContactReducer} from './Reducers/Contact'

//so far we only have one reducer but I like makeing a combined one just in case
const rootReducer = combineReducers({
  Projects:ProjectReducer,
  Tags:TagsReducer,
  Contact:ContactReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App /> 
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
