import React from 'react';

const ConditionsHeader = (props) => {
  return (
    <div id="conditionsheader">
      <div id="leftheader">
      <h1>Conditions</h1>
      <p>As the season goes on, track conditions and monitor for updates. Build a habit to stay familiar with snowpack and how it is evolving.</p>
      </div>
      <div><button className="addcondition">Add Condition</button></div>
    </div>
  );
};

export default ConditionsHeader;
