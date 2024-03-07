import React, { useState } from 'react';

const HazardPicker = ({hazards, setHazards}) => {

  const hazardColorClick = () => {
    // get values from each of the pickers
    let newOverall = document.getElementById('overallPicker').value;
    let newLower = document.getElementById('lowerPicker').value;
    let newMiddle = document.getElementById('middlePicker').value;
    let newUpper = document.getElementById('upperPicker').value;
    // update hazardSelect with new array of each
    setHazards([newOverall, newLower, newMiddle, newUpper]);
  }


  return (
    <div>
      <h3>What is the overall hazard for the day?</h3>
      <div className="horizontalinput">
        <div className="hazPicker labelgroup" id="overallHazard">
          <label for="overallPicker">Overall:</label>
          <select className={hazards[0].toLowerCase()} id="overallPicker" name="overallPicker" value={hazards[0]} onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="Extreme">
              Extreme
            </option>
            <option className="high" value="High">
              High
            </option>
            <option className="considerable" value="Considerable">
              Considerable
            </option>
            <option className="moderate" value="Moderate">
              Moderate
            </option>
            <option className="low" value="Low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="lowerHazard">
          <label for="lowerPicker">Lower Elevation:</label>
          <select className={hazards[1].toLowerCase()} id="lowerPicker" name="lowerPicker" value={hazards[1]} onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="Extreme">
              Extreme
            </option>
            <option className="high" value="High">
              High
            </option>
            <option className="considerable" value="Considerable">
              Considerable
            </option>
            <option className="moderate" value="Moderate">
              Moderate
            </option>
            <option className="low" value="Low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="middleHazard">
          <label for="middlePicker">Middle Elevation</label>
          <select className={hazards[2].toLowerCase()} id="middlePicker" name="middlePicker" value={hazards[2]} onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="Extreme">
              Extreme
            </option>
            <option className="high" value="High">
              High
            </option>
            <option className="considerable" value="Considerable">
              Considerable
            </option>
            <option className="moderate" value="Moderate">
              Moderate
            </option>
            <option className="low" value="Low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="upperHazard">
          <label for="upperPicker">Upper Elevation:</label>
          <select className={hazards[3].toLowerCase()} id="upperPicker" name="upperPicker" value={hazards[3]} onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="Extreme">
              Extreme
            </option>
            <option className="high" value="High">
              High
            </option>
            <option className="considerable" value="Considerable">
              Considerable
            </option>
            <option className="moderate" value="Moderate">
              Moderate
            </option>
            <option className="low" value="Low">
              Low
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HazardPicker;
