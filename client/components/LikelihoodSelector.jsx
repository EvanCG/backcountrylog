import React from 'react';

const LikelihoodSelector = (props) => {

  const updateLikelihood = () => {
    let newSelection = document.querySelector('#likelihoodSelector').value;
    props.selectLikelihood(newSelection);
  }

  return (
    <div>
      <h4>How likely is it to trigger an avalanche?</h4>
      <div className="labelgroup" id="likelihoodpicker">
          <select id="likelihoodSelector" name="likelihoodSelector" value={props.likelihood} onChange={() => updateLikelihood()}>
            <option disabled value="select">
              -- Select Likelihood --
            </option>
            <option className="certain" value="Certain">
              Certain
            </option>
            <option className="verylikely" value="Very Likely">
              Very Likely
            </option>
            <option className="likely" value="Likely">
              Likely
            </option>
            <option className="possible" value="Possible">
              Possible
            </option>
            <option className="unlikely" value="Unlikely">
              Unlikely
            </option>
          </select>
        </div>
    </div>
  );
};

export default LikelihoodSelector;
