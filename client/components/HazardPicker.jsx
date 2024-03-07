import React from 'react';

const HazardPicker = (props) => {
  return (
    <div>
      <h3>What is the overall hazard for the day?</h3>
      <div className="hazPicker" id="overallHazard">
        <label for="overallPicker">Overall:</label>
        <select id="overallPicker" name="overallPicker">
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
      <div className="hazPicker" id="lowerHazard">
        <label for="lowerPicker">Lower Elevation:</label>
        <select id="lowerPicker" name="lowerPicker">
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
      <div className="hazPicker" id="middleHazard">
        <label for="middlePicker">Middle Elevation</label>
        <select id="middlePicker" name="middlePicker">
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
      <div className="hazPicker" id="upperHazard">
        <label for="upperPicker">Upper Elevation:</label>
        <select id="upperPicker" name="upperPicker">
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
  );
};

export default HazardPicker;
