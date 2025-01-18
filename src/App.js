import React from 'react';
import RightSide from './pages/RightSide';
import LeftSide from './pages/LeftSide';
const App = () => {
  return (
    <div className="app-container">
      <div className="right-side">
      <RightSide />
    </div>
    <div >
      <LeftSide />
    </div>
    
  </div>
  );
};

export default App;
