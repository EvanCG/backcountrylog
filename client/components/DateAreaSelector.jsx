import React from 'react';

const DateAreaSelector = ({
  conditionDate,
  setConditionDate,
  area,
  setArea,
}) => {
  const changeDate = () => {
    let basicDate = document.querySelector('#dateinput').value;
    setConditionDate(basicDate);
  };

  const changeArea = () => {
    setArea(document.querySelector('#area').value);
  };

  return (
    <div className="dateandareaselector">
      <h3>Create a record of conditions for a particular date and place</h3>
      <div className="horizontalinput">
        <div className="labelgroup">
          <label for="date">Date:<span className="requiredSpan">*</span></label>
          <input
            type="date"
            name="date"
            id="dateinput"
            value={conditionDate}
            onChange={() => changeDate()}
          />
        </div>
        <div className="labelgroup">
          <label for="area">Area:<span className="requiredSpan">*</span></label>
          <select
            id="area"
            name="area"
            value={area}
            onChange={() => changeArea()}
          >
            <option disabled value="select">
              -- Select Area --
            </option>
            <option value="Steven's Pass">Steven's Pass</option>
            <option value="Snoqualmie Pass">Snoqualmie Pass</option>
            <option value="West Slopes Central">West Slopes Central</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateAreaSelector;
