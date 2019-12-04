import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MapPage from "./pages/Map";


function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/map">
              <MapPage/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
