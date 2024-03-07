import React from 'react';
import AspectStatic from './AspectStatic';

const ProblemRow = ({ name, likelihood, aspect, idKey}) => {
  return (
    <tr>
      <td className="firstcolumn">{name}</td>
      <td className="aspectstatictd"><AspectStatic aspect={aspect} idKey={idKey}/></td>
      <td>{likelihood}</td>
      <td>
        <a href="#">Edit</a>
      </td>
    </tr>
  );
};

export default ProblemRow;
