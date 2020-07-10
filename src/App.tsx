import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1500} // 25min
        shortRestTime={300} // 5min
        longRestTime={900} // 15min
        cycles={4}
      />
    </div>
  );
}

export default App;
