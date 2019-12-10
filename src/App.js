import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MapPage from "./pages/Map";
import AdminPage from "./pages/Admin";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/map">
              <MapPage/>
            </Route>

            <Route path="/admin">
              <AdminPage/>
            </Route>

            <Route path="/">
              <nav>
                <ul>
                  <li>
                    <Link to="/map">map</Link>
                  </li>
                  <li>
                    <Link to="/admin">admin</Link>
                  </li>
                </ul>
              </nav>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
