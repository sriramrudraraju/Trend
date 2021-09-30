import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios, { AxiosRequestConfig } from "axios";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const config: AxiosRequestConfig = {
      headers: { 'Content-Type': 'application/json'}
    }
    axios.get(`api/users`, config)
      .then((resp: any) => { setUser(resp.data.user) })
      .catch(() => { setUser("Error") })
  }, []);
  return <h2>User: {user}</h2>;
}

export default App;
