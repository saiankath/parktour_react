import React from 'react'
import './App.css';
import ParkList from './components/ParkList/ParkList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <ParkList />
    </React.Fragment>
  );
}

export default App;
