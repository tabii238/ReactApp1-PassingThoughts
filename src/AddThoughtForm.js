import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
   const [text, setText] = useState('');
//this function will be called when the input changes: it takes the event as an argument and calls setText() to update the state:
  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  //this function prevents the form from refreshing the page by preventing the browswer from performing its default behavior when form is submitted.It also creates a new thougth object with its 3 req. props. calling setText('') at the end clears the input field after submit:
  const handleSubmit = (event) => {
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    if (text.length > 0) {
    props.addThought(thought);
    setText('');
    }
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
