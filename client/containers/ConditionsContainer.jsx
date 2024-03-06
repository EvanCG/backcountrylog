import React from 'react';
import ConditionRow from './ConditionRow';

const ConditionsContainer = (props) => {
  let conditionsRows = props.conditions.map((condition, index) => {
    return (
      <ConditionRow
        key={`condition${index}`}
        date={condition.date}
        area={condition.area}
        problems={condition.problems}
        hazard={condition.hazard}
        notes={condition.notes}
      />
    );
  });

  return (
    <div id="conditionscontainer">
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Area</th>
            <th>Avalanche Problem</th>
            <th>Hazard Rating</th>
            <th></th>
          </tr>
          {conditionsRows}
        </tbody>
      </table>
      <button className="addcondition">Add Condition</button>
    </div>
  );
};

export default ConditionsContainer;
