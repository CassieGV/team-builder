import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import memberFrom from './Form';

function App() {
  const [member, setMember] = useState([
    {
      name: "",
      email: "",
      role: ""
    } 
  ])

  const addNewMember = (formData) => {
    const newMember = {
      name: formData.name,
      email: formData.email,
      role: formData.role
    };
    setMember([...member, newMember]);
  };
  return (
    <div className = "members">
      <memberFrom addNewMember = {addNewMember}/>
    </div>
  );
}

export default App;
