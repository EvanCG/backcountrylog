import React from 'react';

const LikelihoodSelector = (props) => {
  return (
    <div>
      <h4>How likely is it to trigger an avalanche?</h4>
      <div className="labelgroup" id="likelihoodpicker">
          <select id="likelihoodSelector" name="likelihoodSelector" defaultValue="select">
            <option disabled value="select">
              -- Select Likelihood --
            </option>
            <option className="certain" value="certain">
              Certain
            </option>
            <option className="verylikely" value="verylikely">
              Very Likely
            </option>
            <option className="likely" value="likely">
              Likely
            </option>
            <option className="possible" value="possible">
              Possible
            </option>
            <option className="unlikely" value="unlikely">
              Unlikely
            </option>
          </select>
        </div>
    </div>
  );
};

export default LikelihoodSelector;
