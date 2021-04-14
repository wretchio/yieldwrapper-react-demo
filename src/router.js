import { useEffect } from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import First from './views/First';
import Second from './views/Second';

const Router = () => {
  let location = useLocation();

  useEffect(() => {
    window.yieldwrapper.initialize();
  }, [location]);

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
