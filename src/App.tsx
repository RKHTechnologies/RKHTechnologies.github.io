import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './Shared/Error404';
import GlobalStyle from './Shared/GlobalStyle';

function App() {
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route component={Error404} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
