import React, { useState } from 'react';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './Shared/Error404';
import GlobalStyle from './Shared/GlobalStyle';

const App: FC = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
    
  window.addEventListener("scroll", () => {
    if (window.location.pathname.split(process.env.PUBLIC_URL)[1]?.length > 1)
      setStickyHeader(true);
    
    else
      window.pageYOffset > window.innerHeight - 5 ? setStickyHeader(true) : setStickyHeader(false); 
  });

  // const updateSticky = () => {
  //   if (window.location.pathname.split(process.env.PUBLIC_URL)[1]?.length > 1)
  //     setStickyHeader(true);
  //   else
  //     window.pageYOffset > window.innerHeight - 5 ? setStickyHeader(true) : setStickyHeader(false); 
  // }

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
