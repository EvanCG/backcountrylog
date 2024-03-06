import React, { useEffect, useState } from 'react';

const TestFetch = (props) => {
  const [names, setNames] = useState(null);

  let mapsArray;

  useEffect(() => {
    console.log('Inside useeffect');
    fetch('/api/leaders')
      .then((res) => res.json())
      .then((data) => {
        console.log('New data is: ', data);
        setNames(data);
      });
  }, []);
  if(names != null) {
    mapsArray = names.map((person) => {
      return (
        <li>{person.name}</li>
      )
    });
  }
  

  return (
    <div id="testComponent">
      <p>This is the testComponent now named .jsx with a prop title of: {props.title}</p>
      <ul>
        {mapsArray}
      </ul>
    </div>
  );
};

export default TestFetch;
