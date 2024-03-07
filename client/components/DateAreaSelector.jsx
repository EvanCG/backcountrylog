import React from 'react';

const DateAreaSelector = (props) => {
  return (
    <div className="dateandareaselector">
      <h3>Create a record of conditions for a particular date and place:</h3>
      <label for="date">
        Date: </label>
        <input type="date" name="date" />
      <label for="area">Area</label>
      <select id="area" name="area">
        <option value="Steven's Pass">Steven's Pass</option>
        <option value="Snoqualmie Pass">Snoqualmie Pass</option>
        <option value="West Slopes Central">West Slopes Central</option>
      </select>
    </div>
  );
};

export default DateAreaSelector;
