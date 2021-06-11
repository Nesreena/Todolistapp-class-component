import React, { Component } from 'react'
import HomeScreen from './Screens/HomeSreen/HomeScreen';
import './App.css';

class App extends Component {
  render(){
    return (
      <main>
        <div className="container">
          <HomeScreen></HomeScreen>
        </div>
      </main>
    )
  }
}

export default App;
