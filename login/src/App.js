import React from 'react';
import './App.css';
import Login from './Login'

class App extends React.Component {

  render() {
    return (
      <div className="container mt-4" style={{ width: '300px' }}>
        <Login />
      </div>
    );
  }
}

export default App;
