import React from 'react';
import "@fortawesome/fontawesome-free"
import './App.css';
import Auth from './components/auth/Auth'
import DataBasePage from './components/dataBasePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
  return (
      <Router>
          <div>
              <Link to="/">Home        </Link>
              <Link to="/about">Сделал для примера подключил роутинг, чтобы перерисовывалась страница</Link>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/about">
                      <DataBasePage />
                  </Route>
                  <Route path="/">
                      <Auth/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
