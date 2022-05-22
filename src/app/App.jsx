import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { uselayoutStyles } from "../common/assets/jss/components/layout";
import Loading from "../common/components/loading/Loading";
import Navbars from "../common/components/navbars/Navbars";
import Loader from "../common/components/loader/Loader";

const AdminLayout = lazy(() => import("./Admin/"));

function App() {
  const classes = uselayoutStyles();

  return (
    <div className={classes.root}>
      {/* top linear loader will be activated */}
      <Loader />
      <Navbars />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/admin" component={AdminLayout} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
