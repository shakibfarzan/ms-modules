import { Get } from '@microsoft/mgt-react';
import React, { useState } from 'react';
import './App.css';
import { Agenda, EmailList, Login, PeoplePicker } from './components';

function App() {
  return (
    <div className="App">
      <Login />
      <PeoplePicker />
      <EmailList />
    </div>
  );
}

export default App;