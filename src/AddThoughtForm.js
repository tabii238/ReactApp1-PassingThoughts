import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
   const [text, setText] = useState('');

//this function will be called when the input changes: 
//it takes the event as an argument and calls setText() to update the state:
//then connect text and handlChange so that the input field responds by adding as attribute on line 36
  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  //this function prevents the form from refreshing the page by preventing 
  //the browswer from performing its default behavior when form is submitted.
  //It also creates a new thought object with its 3 req. props. calling setText('') at the end clears the input field after submit:
  const handleSubmit = (event) => {
    event.preventDefault();
    
//a new thought object equal to the imported function from utilies.js.
//then passing it to addThoughtForm, which we're grabbing from props where it's defined in App.js:
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    if (text.length > 0) { 
    props.addThought(thought);
    setText(''); //finally, clear the field after thought is added by calling setText to update the state to an empty string.
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
