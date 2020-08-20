import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import './index.css';
import App from './App';

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/"><App /></Route>
        </Switch>
      </Router>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

