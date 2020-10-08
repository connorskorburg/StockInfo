import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsList from './Components/NewsList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsList />
    </div>
  );
}

export default App;
