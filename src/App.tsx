import { Providers, Spinner, Tasks, ThemeToggle, Todo } from '@microsoft/mgt-react';
import './App.css';
import { AddCalendarEvent, Agenda, EmailList, Login, PeoplePicker } from './components';
import useIsSignedIn from './hooks/useIsSignedIn';
import { useEffect, useState } from 'react';

function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div className="App">
      <Login />
      {
        isSignedIn && 
        <>
          <Agenda />
          <AddCalendarEvent />
        </>
      }
    </div>
  );
}

export default App;