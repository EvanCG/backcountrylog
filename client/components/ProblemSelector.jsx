import React from 'react';

const ProblemSelector = (props) => {
  return (
    <div>
      <h4>Add Avalanche Problem: </h4>
      <div id="problemsContainer">
        <div
          className={'problemcard'.concat(
            props.problem === 'Dry Loose' ? ' problemselection' : ''
          )}
          id="dryloose"
          onClick={() => props.selectProblem('Dry Loose')}
        >
          <img src="https://avalanche.org/assets/problem-icons/DryLoose.png"></img>
          <p>Dry Loose</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Storm Slab' ? ' problemselection' : ''
          )}
          id="stormslab"
          onClick={() => props.selectProblem('Storm Slab')}
        >
          <img src="https://avalanche.org/assets/problem-icons/StormSlab.png"></img>
          <p>Storm Slab</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Wind Slab' ? ' problemselection' : ''
          )}
          id="windslab"
          onClick={() => props.selectProblem('Wind Slab')}
        >
          <img src="https://avalanche.org/assets/problem-icons/WindSlab.png"></img>
          <p>Wind Slab</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Cornice' ? ' problemselection' : ''
          )}
          id="cornice"
          onClick={() => props.selectProblem('Cornice')}
        >
          <img src="https://avalanche.org/assets/problem-icons/CorniceFall.png"></img>
          <p>Cornice</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Wet Loose' ? ' problemselection' : ''
          )}
          id="wetloose"
          onClick={() => props.selectProblem('Wet Loose')}
        >
          <img src="https://avalanche.org/assets/problem-icons/WetLoose.png"></img>
          <p>Wet Loose</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Wet Slab' ? ' problemselection' : ''
          )}
          id="wetslab"
          onClick={() => props.selectProblem('Wet Slab')}
        >
          <img src="https://avalanche.org/assets/problem-icons/WetSlab.png"></img>
          <p>Wet Slab</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Persistent Slab' ? ' problemselection' : ''
          )}
          id="persistentslab"
          onClick={() => props.selectProblem('Persistent Slab')}
        >
          <img src="https://avalanche.org/assets/problem-icons/PersistentSlab.png"></img>
          <p>Persistent Slab</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Deep Persistent Slab' ? ' problemselection' : ''
          )}
          id="deeppersistentslab"
          onClick={() => props.selectProblem('Deep Persistent Slab')}
        >
          <img src="https://avalanche.org/assets/problem-icons/DeepPersistentSlab.png"></img>
          <p>Deep Persistent Slab</p>
        </div>
        <div
          className={'problemcard'.concat(
            props.problem === 'Glide' ? ' problemselection' : ''
          )}
          id="glide"
          onClick={() => props.selectProblem('Glide')}
        >
          <img src="https://www.cnfaic.org/wp-content/plugins/akavalanche/icons/Glide.png"></img>
          <p>Glide</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSelector;
