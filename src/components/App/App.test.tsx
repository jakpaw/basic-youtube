import React from 'react';
import ReactDOM from 'react-dom';
import { MockStore, setupMockStore } from 'testUtils';
import App from './App';

test('App renders in initial state without crashing', () => {
  setupMockStore();
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
