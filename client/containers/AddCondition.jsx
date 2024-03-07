import React from 'react';
import AddConditionHeader from '../components/AddConditionHeader';
import DateAreaSelector from '../components/DateAreaSelector';
import HazardPicker from '../components/HazardPicker';
import AvalancheProblemsContainer from './AvalancheProblemsContainer';
import Notes from '../components/Notes';

const AddCondition = (props) => {
  // Logic to conditionally display the add new problem screens

  // logic for constructing the state of a particular condition

  const addNewCondition = () => {
    // grab all of the state in newCondition, and call props.saveAdd

    let newCondition = {
      date: 'Mar 7th, 2023',
      area: 'West Slopes Central',
      problems: [
        {
          name: 'cornice',
          liklihood: 'certain',
          aspect: {
            store: {
              'north upper': true,
              'north middle': true,
              'north lower': true,
              'northeast upper': false,
              'northeast middle': false,
              'northeast lower': false,
              'east upper': false,
              'east middle': false,
              'east lower': false,
              'southeast upper': false,
              'southeast middle': false,
              'southeast lower': false,
              'south upper': false,
              'south middle': false,
              'south lower': false,
              'southwest upper': false,
              'southwest middle': false,
              'southwest lower': false,
              'west upper': false,
              'west middle': false,
              'west lower': false,
              'northwest upper': true,
              'northwest middle': true,
              'northwest lower': true,
            },
          },
        },
        {
          name: 'wetloose',
          liklihood: 'possible',
          aspect: {
            store: {
              'north upper': true,
              'north middle': true,
              'north lower': true,
              'northeast upper': true,
              'northeast middle': true,
              'northeast lower': true,
              'east upper': true,
              'east middle': true,
              'east lower': true,
              'southeast upper': false,
              'southeast middle': false,
              'southeast lower': false,
              'south upper': false,
              'south middle': false,
              'south lower': false,
              'southwest upper': false,
              'southwest middle': false,
              'southwest lower': false,
              'west upper': false,
              'west middle': false,
              'west lower': false,
              'northwest upper': true,
              'northwest middle': true,
              'northwest lower': true,
            },
          },
        },
      ],
      hazard: ['Moderate', 'Low', 'Moderate', 'Considerable'],
      notes: 'Wow, we added a new one!',
    };

    props.saveAdd(newCondition);
  };

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
        <div>
          <a className="cancellink" onClick={props.cancelAdd}>
            Cancel
          </a>
        </div>
        <button onClick={() => addNewCondition()}>Save</button>
      </div>
    </div>
  );
};

export default AddCondition;
