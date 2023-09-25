import { IDynamicPerson, PeoplePicker as MSPeoplePicker, People } from '@microsoft/mgt-react';
import React, { useState } from 'react'

const PeoplePicker: React.FC = () => {
    const [people, setPeople] = useState<IDynamicPerson[] | undefined>([]); 
    const handleSelectionChanged = (e: any) => {
      setPeople(e.target.selectedPeople);
    };

  return (
    <div>
        <MSPeoplePicker selectionChanged={handleSelectionChanged} />
        Selected People: <People people={people} />
    </div>
  )
}

export default PeoplePicker