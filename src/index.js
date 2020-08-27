import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.min.css';  
import 'ag-grid-community/dist/styles/ag-theme-balham.min.css';  

ReactDOM.render(
   <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>,
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
