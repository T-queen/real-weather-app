import React from 'react';
import Weather from "./Weather";
import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/taiwo-oresanya-b00209135/" target="_blank" rel="noreferrer">Taiwo Oresanya</a>  
      {""} and is {""}
      <a href="https://github.com/T-queen/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


