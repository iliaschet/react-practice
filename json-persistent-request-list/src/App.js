import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './Main/Main'
import List from './List/List'

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">Список</a>
          </li>
        </ul>
      </nav>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/list" component={List} />
          </Switch>
        </Router>
      </main>
    </div>
  )
}

export default App;
