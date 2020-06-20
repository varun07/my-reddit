import React from 'react';
import { Provider } from 'react-redux';
import store from './globalRedux/store';
import FeedsList from './components/feeds/feedsList/container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header></header>
        <main>
          <FeedsList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
