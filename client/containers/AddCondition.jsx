import React, { useEffect, useState } from 'react';
import AddConditionHeader from '../components/AddConditionHeader';
import DateAreaSelector from '../components/DateAreaSelector';
import HazardPicker from '../components/HazardPicker';
import AvalancheProblemsContainer from './AvalancheProblemsContainer';
import Notes from '../components/Notes';

const AddCondition = (props) => {
  // Logic to conditionally display the add new problem screens
  const [conditionDate, setConditionDate] = useState('');
  const [area, setArea] = useState('select');
  const [problems, setProblems] = useState([]);
  const [hazards, setHazards] = useState([
    'select',
    'select',
    'select',
    'select',
  ]);
  const [notes, setNotes] = useState('');
  const [saveState, setSaveState] = useState(true);

  /* Checks if we have entered all of the required fields, and if so, enbles the save button */
  useEffect(() => {
    if(conditionDate !== '' && area !== 'select' && notes != '' && hazards.every((element) => element !== 'select')) {
      setSaveState(false);
    }
  },[conditionDate, area, hazards, notes])



  // grab all of the state in newCondition, and call props.saveAdd
  const addNewCondition = () => {

    // Format the date to be more attractive (thanks chatgpt for some help!)
    const getDaySuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    /* HACK - THIS WILL ONLY WORK IN SEATTLE IN PST!!!! */
    const myDate = new Date(conditionDate.concat(' PST'));
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = monthNames[myDate.getMonth()];
    const day = myDate.getDate();
    const daySuffix = getDaySuffix(day);

    const formattedDate = `${month} ${day}${daySuffix}, ${myDate.getFullYear()}`;

    let newCondition = {
      date: formattedDate,
      area: area,
      problems: problems,
      hazard: hazards,
      notes: notes,
    };

    props.saveAdd(newCondition);
  };

  return (
    <div>
      <AddConditionHeader />
      <DateAreaSelector
        conditionDate={conditionDate}
        setConditionDate={setConditionDate}
        area={area}
        setArea={setArea}
      />
      <hr></hr>
      <HazardPicker hazards={hazards} setHazards={setHazards} />
      <hr></hr>
      <AvalancheProblemsContainer
        problems={problems}
        setProblems={setProblems}
      />
      <hr></hr>
      <Notes notes={notes} setNotes={setNotes} />
      <hr></hr>
      <div id="addconditionfooter" className="cancelbuttoncombo">
        <div>
          <a className="cancellink" onClick={props.cancelAdd}>
            Cancel
          </a>
        </div>
        <button className="savebutton" disabled={saveState} onClick={() => addNewCondition()}>Save</button>
      </div>
    </div>
  );
};

export default AddCondition;
