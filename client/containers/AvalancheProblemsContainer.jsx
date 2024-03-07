import React from 'react';
import ProblemModal from '../components/ProblemModal';

const AvalancheProblemsContainer = (props) => {

  let problemRows;

  return (
    <div>
      <h3>Avalanche Problems</h3>
      <p>What specific problems are called out for the day?</p>
      <table>
        <tbody>
          <tr>
            <th>Problem</th>
            <th>Aspect/Elevation</th>
            <th>Likelihood</th>
            <th></th>
          </tr>
          {problemRows}
        </tbody>
      </table>
      <ProblemModal />
    </div>
  );
};

export default AvalancheProblemsContainer;
