import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Bullseye, Spinner } from '@patternfly/react-core';

const AdminDashboard = lazy(() =>
  import(/* webpackChunkName: "AdminDashboard" */ './components/admin-dashboard/AdminDashboard')
);
const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ './Routes/HomePage')
);
const OopsPage = lazy(() =>
  import(/* webpackChunkName: "OopsPage" */ './Routes/OopsPage/OopsPage')
);
const Routes = () => (
  <Suspense
    fallback={
      <Bullseye>
        <Spinner />
      </Bullseye>
    }
  >
    <Switch>
      <Route path="/">
        <AdminDashboard />
      </Route>
      <Route>
        <OopsPage />
      </Route>
    </Switch>
  </Suspense>
);

export default Routes;
