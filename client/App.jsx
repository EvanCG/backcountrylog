import React, { useState } from 'react';

import './styles/styles.css';
import ConditionsContainer from './containers/ConditionsContainer';
import AddCondition from './containers/AddCondition';

const App = () => {
  
  const CONDITIONS = [
    {
      date: 'Mar 6th, 2024',
      area: "Steven's Pass",
      problems: [
        {
          name: 'Wind Slab',
          likelihood: 'Possible',
          aspect: 'North, Northwest',
        },
        { name: 'Wet Loose', likelihood: 'Likely', aspect: 'South, Southeast' },
      ],
      hazard: ['Moderate', 'Low', 'Moderate', 'Considerable'],
      notes: 'Pretty awesome day to send it!',
    },
    {
      date: 'Mar 5th, 2024',
      area: "Steven's Pass",
      problems: [
        {
          name: 'Loose Dry',
          likelihood: 'Possible',
          aspect: 'North, Northwest',
        },
        { name: 'Wet Loose', likelihood: 'Likely', aspect: 'South, Southeast' },
      ],
      hazard: ['Considerable', 'Low', 'Moderate', 'Considerable'],
      notes: 'Look out for sasquatch',
    },
    {
      date: 'Mar 5th, 2024',
      area: 'West Slopes Central',
      problems: [
        { name: 'Storm Slab', likelihood: 'Certain', aspect: 'All Aspects' },
      ],
      hazard: ['Extreme', 'Extreme', 'Extreme', 'Extreme'],
      notes: 'Huge storm, not a good idea to go outside!',
    },
  ];
  
  // STATE GOES HERE
  // Are we actively adding a new condition?
  const [addingCondition, setAddingCondition] = useState(false);
  // What is the set of conditions we should currently display for this user?
  const [conditions, setConditions] = useState(CONDITIONS);

  const addCondition = () => {
    setAddingCondition(true);
  };

  const cancelAdd = () => {
    setAddingCondition(false);
  };

  const saveAdd = (newCondition) => {
    // Take the newCondition, and add it to the conditions state object
    // copy current state
    let newConditionsArray = conditions.slice();
    newConditionsArray.unshift(newCondition);
    setConditions(newConditionsArray);
    setAddingCondition(false);
  };

  

  // If we're adding a new condition, display that componenet, otherwise display the conditionsContainer
  let renderedContent = addingCondition
    ? [<AddCondition cancelAdd={cancelAdd} saveAdd={saveAdd} />]
    : [
        <ConditionsContainer
          addCondition={addCondition}
          conditions={conditions}
        />,
      ];

  return <div id="appcontainer">{renderedContent}</div>;
};

export default App;
