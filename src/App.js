import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form'
import { Member } from './components/Member'

function App() {
  const [members, setMembers] = useState([])

  const updateMembers = (member) => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Form updateMembers={updateMembers} />
      {members.map(member => {return <Member member={member} />})}
    </div>
  );
}

export default App;
