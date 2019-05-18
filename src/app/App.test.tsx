import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from '../common/Loader';
import {BrowserRouter} from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <App/>
    </Suspense>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
