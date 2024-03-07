import React from 'react';

const ConditionRow = (props) => {
  return (
    <tr>
      <td className="firstcolumn">{props.date}</td>
      <td>{props.area}</td>
      <td>{props.problems.map((problem) => problem.name).join(' ')}</td>
      <td>
        <span className={'hazardBadge ' + props.hazard[0].toLowerCase()}>
          {props.hazard[0]}
        </span>
      </td>
      <td>
        <a href="#">Edit</a>
      </td>
    </tr>
  );
};

export default ConditionRow;
