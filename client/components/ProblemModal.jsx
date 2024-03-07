import React, { useState } from 'react';
import ProblemSelector from './ProblemSelector';
import AspectSelector from './AspectSelector';
import LikelihoodSelector from './LikelihoodSelector';
import AspectCreator from './aspectObject';

const ProblemModal = ({problems, setProblems }) => {
  const [problem, setProblem] = useState(null);
  const [aspect, setAspect] = useState(new AspectCreator());
  const [likelihood, setLikelihood] = useState('select');

  /* Shows the modal */
  const openModal = () => {
    const dialog = document.getElementById('problemdialog');
    dialog.showModal();
  };

  /* Reset state for the components and close the dialog */
  const cancelModal = () => {
    setProblem(null);
    setAspect(new AspectCreator());
    setLikelihood('select');

    const dialog = document.getElementById('problemdialog');
    dialog.close();
  };

  const saveModal = () => {
    /* Save the new object */
    let newProblem = {
      name: problem,
      aspect: aspect,
      likelihood: likelihood,
    };
    /* Save the new version of state */
    let newProblemsArray = problems.slice();
    newProblemsArray.push(newProblem);
    setProblems(newProblemsArray);


    
    /* Close the modal & clear state */
    cancelModal();
  };

  const selectProblem = (problemId) => {
    setProblem(problemId);
  };

  const selectLikelihood = (likelihood) => {
    setLikelihood(likelihood);
  };

  const selectAspect = (clickedAspect) => {
    // copy current aspect
    let newAspect = JSON.parse(JSON.stringify(aspect));
    // swap the boolean at the new aspect
    newAspect.store[clickedAspect] = !newAspect.store[clickedAspect];
    setAspect(newAspect);
  };

  return (
    <div>
      <button id="addaproblem" onClick={() => openModal()}>
        Add a Problem
      </button>
      <dialog id="problemdialog">
        <div id="dialogcontainer">
          <div id="mainModal">
            <h3>Add Avalanche Problem</h3>
            <ProblemSelector selectProblem={selectProblem} problem={problem} />
            <AspectSelector selectAspect={selectAspect} aspect={aspect} />
            <LikelihoodSelector
              selectLikelihood={selectLikelihood}
              likelihood={likelihood}
            />
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
