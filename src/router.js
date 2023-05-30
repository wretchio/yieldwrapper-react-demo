import { useState, useEffect } from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';

import Start from './views/Start';
import Dynamic from './views/Dynamic';

const Router = () => {
  let location = useLocation();

  const [previous, setPrevious] = useState('');

  useEffect(() => {
    if (previous !== location.pathname) {
      window.yieldwrapper.cmd.push(() => {
        window.yieldwrapper.refresh();
      });

      setPrevious(location.pathname);
    }
  }, [location]); //eslint-disable-line

  return (
    <Switch>
      <Route exact path="/">
        <Start />
      </Route>
      <Route exact path="/dynamic">
        <Dynamic />
      </Route>
    </Switch>
  );
};

export default Router;
