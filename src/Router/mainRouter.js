import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Weather from '../Pages/Weather';
import Dust from '../Pages/Dust';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Weather} />
      <Route path="/misaemisae" component={Dust} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
