import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

//set up an array of thoughts (each with 3 properties); initialize thoughts using the useState hook:
//setThoughts setter function will update the list of thoughts when called
export function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

//addThought function uses setThoughts to add a thoughts to the front of the array:
//using a stateSetter callback function since the value of new state depends on value of prev state.
//take the value of the prev array using spread syntax. On line 40, pass this to AddThoughtForm as a prop.
const addThought = (thought) => {
  setThoughts(prev => [thought, ...prev])
}

//using setThought and filter function to only keep thoughts if id doesn't match the thoughtIdToRemove:
const removeThought = (thoughtIdToRemove) => {
  setThoughts((thoughts) =>
    thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
  );
};

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
