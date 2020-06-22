import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import store from './globalRedux/store';
import AppRoutes from './appRoutes';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="center">Reddit News Feed</h1>
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export function ClientApp() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default App;
