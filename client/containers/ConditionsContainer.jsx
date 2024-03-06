import React, { useEffect, useState } from 'react';

const ConditionsContainer = (props) => {

  let conditions;

  return (
    <div id="conditionscontainer">
      <p>Conditions Table</p>
      <table>
        <tr>
          <th>Date</th>
          <th>Area</th>
          <th>Avalanche Problem</th>
          <th>Hazard Rating</th>
          <th></th>
        </tr>
        {conditions}
      </table>
      <button className="addcondition">Add Condition</button>
    </div>
  );
};

export default ConditionsContainer;
