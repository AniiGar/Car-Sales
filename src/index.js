import React from 'react';
import ReactDOM from 'react-dom';

// Step 1: import createStore from Redux
import { createStore } from 'redux';

// Step 4: import Provder from React-Redux
import { Provider } from 'react-redux';

// Step 2: import a reducer
import { reducer } from './reducers/index';

// SN: created rootReducer to combine all reducers into one file.
// import { rootReducer } from './reducers/index';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// Step 3: create const funtion that equals createStore and pass in reducer
const store= createStore(reducer);

// Step 5: wrap the app component in the provider
// Step 6: pass the created store object to the Provider as a prop
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
rootElement);

// Info: the store is now accessible to all components inside of the App