import React from 'react';

import './styles/styles.css';
import TestFetch from './components/TestFetch';
import ConditionsHeader from './components/ConditionsHeader';
import ConditionsContainer from './containers/ConditionsContainer';

const CONDITIONS = [
  {
    date: 'Mar 6th, 2023',
    area: "Steven's Pass",
    problems: [{name: 'Wind Slab', liklihood: 'Possible', aspect:'North, Northwest'}, {name: 'Wet Loose', liklihood: 'Likely', aspect:'South, Southeast'}],
    hazard: ['Moderate', 'Low', 'Moderate', 'Considerable'],
    notes: 'Pretty awesome day to send it!',
  },
  {
    date: 'March 5th, 2023',
    area: "Steven's Pass",
    problems: [{name: 'Loose Dry', liklihood: 'Possible', aspect:'North, Northwest'}, {name: 'Wet Loose', liklihood: 'Likely', aspect:'South, Southeast'}],
    hazard: ['Moderate', 'Low', 'Moderate', 'Considerable'],
    notes: 'Look out for sasquatch',
  },
  {
    date: 'March 5th, 2023',
    area: "West Slopes Central",
    problems: [{name: 'Storm Slab', liklihood: 'Certain', aspect:'All Aspects'}],
    hazard: ['Extreme', 'Extreme', 'Extreme', 'Extreme'],
    notes: 'Huge storm, not a good idea to go outside!',
  },
];

const App = () => {
  return (
    <div>
      <h1>Backcountry Log</h1>
      <ConditionsHeader />
      <ConditionsContainer />
    </div>
  );
};

export default App;