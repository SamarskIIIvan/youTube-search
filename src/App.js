import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import LocalStorage from './components/localStorage/LocalStorage';
import {BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './components/pages/Pages';

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <LocalStorage>
            <BrowserRouter>
              <Header/>
              <Pages/>
            </BrowserRouter>
          </LocalStorage>
        </Provider>
      </div>
  );
}

export default App;
