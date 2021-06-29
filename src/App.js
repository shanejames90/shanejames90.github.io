import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Projects = lazy(() => import('./pages/projects'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.PROJECTS} component={Projects} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
