import React from 'react';

const Notes = ({notes, setNotes}) => {


  const updateNotes = () => {
    setNotes(document.querySelector('#note').value);
  }

  return (
    <div>
      <h3>Weather Patterns & Notes:</h3>
      <div className="labelgroup">
        <label for="note">
          What is the primary take away from today's observation, and anuy other
          key notes to remember:
        </label>
        <textarea name="note" id="note" value={notes} onChange={() => updateNotes()}></textarea>
      </div>
    </div>
  );
};

export default Notes;
