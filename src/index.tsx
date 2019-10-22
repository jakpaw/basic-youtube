import { API_KEY } from 'api-key';
import App from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import './index.scss';

if (!API_KEY) {
  throw new Error('You have to set REACT_APP_API_KEY environment variable with YouTube API key');
}

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
