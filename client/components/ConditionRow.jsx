import React from 'react';

const ConditionRow = (props) => {
  return (
    <tr>
      <td className="firstcolumn">{props.date}</td>
      <td>{props.area}</td>
      <td>{props.problems.map((problem) => problem.name)}</td>
      <td>{props.hazard[0]}</td>
      <td><a href="#">Edit</a></td>
    </tr>
  );
};

export default ConditionRow;
