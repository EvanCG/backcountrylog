import React from 'react';

const ProblemSelector = (props) => {
  return (
    <div>
      <h4>Add Avalanche Problem: </h4>
      <div id="problemsContainer">
        <div
          className={"problemcard".concat(props.problem === 'Dry Loose' ? ' problemselection' : '')}
          id="dryloose"
          onClick={() => props.selectProblem('Dry Loose')}
        >
          <p>Dry Loose</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Storm Slab' ? ' problemselection' : '')}
          id="stormslab"
          onClick={() => props.selectProblem('Storm Slab')}
        >
          <p>Storm Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Wind Slab' ? ' problemselection' : '')}
          id="windslab"
          onClick={() => props.selectProblem('Wind Slab')}
        >
          <p>Wind Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Cornice' ? ' problemselection' : '')}
          id="cornice"
          onClick={() => props.selectProblem('Cornice')}
        >
          <p>Cornice</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Wet Loose' ? ' problemselection' : '')}
          id="wetloose"
          onClick={() => props.selectProblem('Wet Loose')}
        >
          <p>Wet Loose</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Wet Slab' ? ' problemselection' : '')}
          id="wetslab"
          onClick={() => props.selectProblem('Wet Slab')}
        >
          <p>Wet Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Persistent Slab' ? ' problemselection' : '')}
          id="persistentslab"
          onClick={() => props.selectProblem('Persistent Slab')}
        >
          <p>Persistent Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Deep Slab' ? ' problemselection' : '')}
          id="deepslab"
          onClick={() => props.selectProblem('Deep Slab')}
        >
          <p>Deep Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'Glide' ? ' problemselection' : '')}
          id="glide"
          onClick={() => props.selectProblem('Glide')}
        >
          <p>Glide</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSelector;
