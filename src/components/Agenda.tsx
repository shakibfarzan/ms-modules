import React from 'react'
import useIsSignedIn from '../hooks/useIsSignedIn';
import { Agenda as MSAgenda } from '@microsoft/mgt-react';

const Agenda: React.FC = () => {
  return (
    <div>
      <MSAgenda />
    </div>
  )
}

export default Agenda