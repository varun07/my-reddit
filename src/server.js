import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import compression from 'compression';
import {StaticRouter} from 'react-router-dom';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducers from './globalRedux/reducers';

import App, {ClientApp} from './App';

const store = createStore(Reducers);

const PORT = process.env.PORT || 3006;
const app = express();

app.use(compression());

app.use(express.static(path.resolve('.', 'build')));

app.get('/*', (req, res) => {
  let context = {};
  console.log(req.url);
  
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>);
  
  const indexFile = path.resolve('.', 'build', 'index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});



app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});