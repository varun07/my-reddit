import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import FeedsList from './components/feeds/feedsList/container';

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/page/:id" component={FeedsList} />
      <Route path="/">
        <Redirect to="/page/1" />
      </Route>
    </Switch>
  )
}