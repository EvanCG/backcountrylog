import React from 'react';
import ProblemModal from '../components/ProblemModal';
import ProblemRow from '../components/ProblemRow';

const AvalancheProblemsContainer = ({ problems, setProblems }) => {
  let problemRows = [];

  let i = 0;

  for (const problem of problems) {
    console.log('problem is: ', problem);
    problemRows.push(
      <ProblemRow
        key={`row${i}`}
        idKey={`aspect${i}`}
        name={problem.name}
        likelihood={problem.likelihood}
        aspect={problem.aspect}
      />
    );
    i++;
  }

  return (
    <div>
      <h3>Avalanche Problems</h3>
      <p>What specific problems are called out for the day?</p>
      <table>
        <thead>
          <tr id="headerrow">
            <th>Problem</th>
            <th>Aspect/Elevation</th>
            <th>Likelihood</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{problemRows}</tbody>
      </table>
      <ProblemModal setProblems={setProblems}/>
    </div>
  );
};

export default AvalancheProblemsContainer;
