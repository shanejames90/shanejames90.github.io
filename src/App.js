import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import('./pages/dashboard'));
const Projects = lazy(() => import('./pages/projects'));
const Contact = lazy(() => import('./pages/contact'));
const Resume = lazy(() => import('./pages/resume'));
const About = lazy(() => import('./pages/about'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.PROJECTS} component={Projects} />
          <Route exact path={ROUTES.CONTACT} component={Contact} />
          <Route exact path={ROUTES.RESUME} component={Resume} />
          <Route exact path={ROUTES.ABOUT} component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
