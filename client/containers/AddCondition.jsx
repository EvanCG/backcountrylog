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
  const [hazards, setHazards] = useState(['select', 'select', 'select', 'select']);
  const [notes, setNotes] = useState('');

  const addNewCondition = () => {
    // grab all of the state in newCondition, and call props.saveAdd

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

    const formattedDate = `${month} ${day}${daySuffix}, ${myDate.getFullYear()}`

    let newCondition = {
      date: formattedDate,
      area: area,
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
      <DateAreaSelector conditionDate={conditionDate} setConditionDate={setConditionDate} area={area} setArea={setArea}/>
      <hr></hr>
      <HazardPicker />
      <hr></hr>
      <AvalancheProblemsContainer />
      <hr></hr>
      <Notes notes={notes} setNotes={setNotes}/>
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
