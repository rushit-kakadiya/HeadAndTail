import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Spinner from './components/Spinner';

import './assets/css/index.css';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("./App")), 0);
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);