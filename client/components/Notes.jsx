import React from 'react';

const Notes = (props) => {
  return (
    <div>
      <h3>Weather Patterns & Notes:</h3>
      <div className="labelgroup">
        <label for="note">
          What is the primary take away from today's observation, and anuy other
          key notes to remember:
        </label>
        <textarea name="note" id="note"></textarea>
      </div>
    </div>
  );
};

export default Notes;
