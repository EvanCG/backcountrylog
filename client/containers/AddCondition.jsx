import React from 'react';
import AddConditionHeader from '../components/AddConditionHeader';
import DateAreaSelector from '../components/DateAreaSelector';
import HazardPicker from '../components/HazardPicker';
import AvalancheProblemsContainer from './AvalancheProblemsContainer';
import Notes from '../components/Notes';

const AddCondition = (props) => {

  // Logic to conditionally display the add new problem screens

  // logic for constructing the state of a particular condition


  return (
    <div>
      <AddConditionHeader />
      <DateAreaSelector />
      <hr></hr>
      <HazardPicker />
      <hr></hr>
      <AvalancheProblemsContainer />
      <hr></hr>
      <Notes />
      <hr></hr>
      <div id="addconditionfooter" className="cancelbuttoncombo">
        <div><a className="cancellink" href="#">Cancel</a></div>
        <button>Save</button>
      </div>
    </div>
  )
};

export default AddCondition;