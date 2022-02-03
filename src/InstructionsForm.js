import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInput]);

    setInstructionInput('');
  }
    
  function handleInstructionChange(e) {
    setInstructionInput(e.target.value);
  }
  return <div>
    <form onSubmit={handleSubmit}>
      Add instructions!
      <input required value={instructionInput} onChange={handleInstructionChange}></input>
      <button>Submit</button>
    </form>
  </div>;
}
