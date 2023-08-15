import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={VideoDetail} />
      </Switch>
    </Router>
  );
}

export default App;
