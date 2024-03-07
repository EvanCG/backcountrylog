import React, { useState } from 'react';
import ProblemSelector from './ProblemSelector';
import AspectSelector from './AspectSelector';
import LikelihoodSelector from './LikelihoodSelector';

const ProblemModal = (props) => {
  
  const [problem, setProblem] = useState(null);
  
  /* Shows the modal */
  const openModal = () => {
    const dialog = document.getElementById('problemdialog');
    dialog.showModal();
  };

  /* Doesn't need to do anything */
  const cancelModal = () => {
    const dialog = document.getElementById('problemdialog');
    dialog.close();
  };

  const saveModal = () => {
    const dialog = document.getElementById('problemdialog');
    // NEEDS TO DO SOME DATA SAVING HERE
    dialog.close();
  };

  const selectProblem = (problemId) => {
    setProblem(problemId);
  }

  return (
    <div>
      <button id="addaproblem" onClick={() => openModal()}>
        Add a Problem
      </button>
      <dialog id="problemdialog">
        <div id="dialogcontainer">
          <div id="mainModal">
            <h3>Add Avalanche Problem</h3>
            <ProblemSelector selectProblem={selectProblem} problem={problem}/>
            <AspectSelector />
            <LikelihoodSelector />
          </div>
          <div id="addproblemfooter" className="cancelbuttoncombo">
            <div>
              <a
                id="cancelproblemadd"
                className="cancellink"
                href="#"
                onClick={() => cancelModal()}
              >
                Cancel
              </a>
            </div>
            <button id="saveProblem" onClick={() => saveModal()}>
              Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProblemModal;
