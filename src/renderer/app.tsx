import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Login';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
          <Router>
              <Switch>
                  <Route path="/">
                      <Login />
                  </Route>
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
