import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;
  
//removing thoughts automatically after 15 seconds: imported useEffect above,
//then calculate how much time left by subtracting current time from when thought expires
//then call setTimeout; pass in removeThought with the thought Id, and timeRemaining as 2nd arg:
  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();

    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining)

//finally, clean up by clearing the timeout after each thought:
    return () => {clearTimeout(timeout)}
   }, [thought])
  
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
