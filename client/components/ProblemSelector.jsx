import React from 'react';

const ProblemSelector = (props) => {
  return (
    <div>
      <h4>Add Avalanche Problem: </h4>
      <div id="problemsContainer">
        <div
          className={"problemcard".concat(props.problem === 'dryloose' ? ' problemselection' : '')}
          id="dryloose"
          onClick={() => props.selectProblem('dryloose')}
        >
          <p>Dry Loose</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'stormslab' ? ' problemselection' : '')}
          id="stormslab"
          onClick={() => props.selectProblem('stormslab')}
        >
          <p>Storm Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'windslab' ? ' problemselection' : '')}
          id="windslab"
          onClick={() => props.selectProblem('windslab')}
        >
          <p>Wind Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'cornice' ? ' problemselection' : '')}
          id="cornice"
          onClick={() => props.selectProblem('cornice')}
        >
          <p>Cornice</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'wetloose' ? ' problemselection' : '')}
          id="wetloose"
          onClick={() => props.selectProblem('wetloose')}
        >
          <p>Wet Loose</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'wetslab' ? ' problemselection' : '')}
          id="wetslab"
          onClick={() => props.selectProblem('wetslab')}
        >
          <p>Wet Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'persistentslab' ? ' problemselection' : '')}
          id="persistentslab"
          onClick={() => props.selectProblem('persistentslab')}
        >
          <p>Persistent Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'deepslab' ? ' problemselection' : '')}
          id="deepslab"
          onClick={() => props.selectProblem('deepslab')}
        >
          <p>Deep Slab</p>
        </div>
        <div
          className={"problemcard".concat(props.problem === 'glide' ? ' problemselection' : '')}
          id="glide"
          onClick={() => props.selectProblem('glide')}
        >
          <p>Glide</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSelector;
