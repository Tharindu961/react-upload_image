import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ImageUpload from './components/imageupload';

ReactDOM.render(
  <ImageUpload />,
  document.getElementById('root')
);


serviceWorker.unregister();
