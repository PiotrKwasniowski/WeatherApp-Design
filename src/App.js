import { useState, useEffect } from 'react';
import './App.css';
import Phone from './components/Phone';

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`App ${animate ? 'animate' : ''}`}>
      <Phone/>
    </div>
  );
}

export default App;
