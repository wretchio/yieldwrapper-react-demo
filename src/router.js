import { useState, useEffect } from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import First from './views/First';
import Second from './views/Second';

const Router = () => {
  let location = useLocation();

  const [previous, setPrevious] = useState('');

  useEffect(() => {
    if (previous !== location.pathname) {
      window.yieldwrapper.initialize();

      setPrevious(location.pathname);
    }
  }, [location]); //eslint-disable-line

  return (
    <Switch>
      <Route exact path="/">
        <First />
      </Route>
      <Route exact path="/other">
        <Second />
      </Route>
    </Switch>
  );
};

export default Router;
