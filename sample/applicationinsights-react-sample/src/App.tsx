import React from 'react';
import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import TestComponent from './TestComponent';
import './App.css';
import { EngagementTracker } from './EngagementTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home
        </p>
      </header>
        <TestComponent/>
    </div>
  );
}

export default App;

