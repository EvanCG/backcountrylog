import React from 'react';

const ProblemSelector = (props) => {
  return (
    <div>
      <h4>Add Avalanche Problem: </h4>
      <div id="problemsContainer">
        <div className="problemCard" id="dryloose">
          <p>Dry Loose</p>
        </div>
        <div className="problemCard" id="stormslab">
          <p>Storm Slab</p>
        </div>
        <div className="problemCard" id="windslab">
          <p>Wind Slab</p>
        </div>
        <div className="problemCard" id="cornice">
          <p>Cornice</p>
        </div>
        <div className="problemCard" id="wetloose">
          <p>Wet Loose</p>
        </div>
        <div className="problemCard" id="wetslab">
          <p>Wet Slab</p>
        </div>
        <div className="problemCard" id="persistentslab">
          <p>Persistent Slab</p>
        </div>
        <div className="problemCard" id="deepslab">
          <p>Deep Slab</p>
        </div>
        <div className="problemCard" id="glide">
          <p>Glide</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSelector;
