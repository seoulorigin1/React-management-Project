import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className='gray-background'>
        <img src={logo} lat='logo' />
        <h2>Let's develop management system!</h2>
      </div>
    );
  }
}

export default App;
