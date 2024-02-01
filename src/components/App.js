import './App.css';
import Home from './Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { v4 } from 'uuid';
import React, { useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const addEventHandler = (event) => {
    console.log(event);
    setEvents([...events, {id: v4(), ...event}]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home events={events}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
