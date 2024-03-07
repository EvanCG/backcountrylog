import React, { useState } from 'react';

const HazardPicker = ({conditionDate, setConditionDate, area, setArea}) => {
  const [hazardSelect, setHazardSelect] = useState(['select', 'select', 'select', 'select']);

  const hazardColorClick = () => {
    // get values from each of the pickers
    let newOverall = document.getElementById('overallPicker').value;
    let newLower = document.getElementById('lowerPicker').value;
    let newMiddle = document.getElementById('middlePicker').value;
    let newUpper = document.getElementById('upperPicker').value;
    // update hazardSelect with new array of each
    setHazardSelect([newOverall, newLower, newMiddle, newUpper]);
  }


  return (
    <div>
      <h3>What is the overall hazard for the day?</h3>
      <div className="horizontalinput">
        <div className="hazPicker labelgroup" id="overallHazard">
          <label for="overallPicker">Overall:</label>
          <select className={hazardSelect[0]} id="overallPicker" name="overallPicker" defaultValue="select" onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="extreme">
              Extreme
            </option>
            <option className="high" value="high">
              High
            </option>
            <option className="considerable" value="considerable">
              Considerable
            </option>
            <option className="moderate" value="moderate">
              Moderate
            </option>
            <option className="low" value="low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="lowerHazard">
          <label for="lowerPicker">Lower Elevation:</label>
          <select className={hazardSelect[1]} id="lowerPicker" name="lowerPicker" defaultValue="select" onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="extreme">
              Extreme
            </option>
            <option className="high" value="high">
              High
            </option>
            <option className="considerable" value="considerable">
              Considerable
            </option>
            <option className="moderate" value="moderate">
              Moderate
            </option>
            <option className="low" value="low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="middleHazard">
          <label for="middlePicker">Middle Elevation</label>
          <select className={hazardSelect[2]} id="middlePicker" name="middlePicker" defaultValue="select" onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="extreme">
              Extreme
            </option>
            <option className="high" value="high">
              High
            </option>
            <option className="considerable" value="considerable">
              Considerable
            </option>
            <option className="moderate" value="moderate">
              Moderate
            </option>
            <option className="low" value="low">
              Low
            </option>
          </select>
        </div>
        <div className="hazPicker labelgroup" id="upperHazard">
          <label for="upperPicker">Upper Elevation:</label>
          <select className={hazardSelect[3]} id="upperPicker" name="upperPicker" defaultValue="select" onChange={() => hazardColorClick()}>
            <option disabled value="select">
              -- Select Hazard --
            </option>
            <option className="extreme" value="extreme">
              Extreme
            </option>
            <option className="high" value="high">
              High
            </option>
            <option className="considerable" value="considerable">
              Considerable
            </option>
            <option className="moderate" value="moderate">
              Moderate
            </option>
            <option className="low" value="low">
              Low
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HazardPicker;
