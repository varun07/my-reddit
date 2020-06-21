import React from 'react';
import { Provider } from 'react-redux';
import store from './globalRedux/store';
import FeedsList from './components/feeds/feedsList/container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1 className="center">Reddit News Feed</h1>
        </header>
        <main>
          <FeedsList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
