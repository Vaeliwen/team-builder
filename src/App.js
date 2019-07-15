import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form'
import { Member } from './components/Member'

function App() {
  const [members, setMembers] = useState([])
  const [memberToEdit, setMemberToEdit] = useState()

  const updateMembers = (member) => {
    setMembers([...members, member]);
  };

  const whatEdit = (event, member) => {
    event.preventDefault()
    setMemberToEdit({member})
    console.log(memberToEdit)
  }

  return (
    <div className="App">
      <Form updateMembers={updateMembers} memberToEdit={memberToEdit} />
      {members.map(member => {return <div><Member member={member} editMode={memberToEdit} /><button onClick={event => whatEdit(event, member)}>Edit!</button></div>})}
    </div>
  );
}

export default App;
