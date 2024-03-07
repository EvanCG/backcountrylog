import React from 'react';
import ConditionRow from '../components/ConditionRow';
import ConditionsHeader from '../components/ConditionsHeader';

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
      <ConditionsHeader addCondition={props.addCondition}/>
      <table>
        <thead>
          <tr id="headerrow">
            <th>Date</th>
            <th>Area</th>
            <th>Avalanche Problem</th>
            <th>Hazard Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{conditionsRows}</tbody>
      </table>
      <button className="addcondition" onClick={props.addCondition}>Add Condition</button>
    </div>
  );
};

export default ConditionsContainer;
