import React from 'react';
import { useEffect, useState } from "react";
import { EngagementTracker } from './EngagementTracker';

const TestComponent = () => {
  const [testNumber, setTestNumber] = useState(0);

  function onClick() {
    let curTestNumber = testNumber;
    setTestNumber(curTestNumber + 1);
  }

  function onClick2() {
  }

  return (
    <EngagementTracker name={TestComponent.name}>
    <div className="App">
      <h1>Test <code>useAppInsightsContext</code></h1>
      <div>
        <p>Current Number: {testNumber}</p>
        <button onClick={onClick}>Add Number</button>
        <button onClick={onClick2}>TEST</button>
      </div>
    </div>
    </EngagementTracker>
  );
};

export default TestComponent;