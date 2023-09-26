import { Spinner, Tasks, ThemeToggle, Todo } from '@microsoft/mgt-react';
import './App.css';
import { Agenda, EmailList, Login, PeoplePicker } from './components';
import useIsSignedIn from './hooks/useIsSignedIn';

function App() {
  const [isSignedIn] = useIsSignedIn();
  return (
    <div className="App">
      <Login />
      {
        isSignedIn && 
        <>
          
        </>
      }
    </div>
  );
}

export default App;