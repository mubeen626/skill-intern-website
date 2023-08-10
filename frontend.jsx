// frontend/src/App.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function App() {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="App">
      <animated.div style={animationProps}>
        <h1>Welcome to Skill Intern Program</h1>
        {/* Other content */}
      </animated.div>
    </div>
  );
}

export default App;
