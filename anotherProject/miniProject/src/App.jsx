import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');


  const area = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!isNaN(l) && !isNaN(w)) {
      console.log('Calculating area...');
      return l *w;
    }
    return 0;
  }
  
  const Area =area();

  const view = () => {
    document.querySelector('.display').innerHTML=`the area is ${Area}`;
  };
    useEffect(()=>{console.log('this calculation has not been done');},[Area]);


  return (
    <>
      <input
        type="number"
        className="inp1 border-3"
        placeholder="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        type="number"
        className="inp border-3"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <button onClick={view}>Click me to know the area</button>
      <p className="display">thi region will show area</p>
    </>
  );
}

export default App;

/*import { useMemo, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  // 🧠 useMemo computes area only when length or width changes
  const area = useMemo(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!isNaN(l) && !isNaN(w)) {
      console.log('Calculating area...');
      return l * w;
    }
    return 0;
  }, [length, width]);

  const view = () => {
    document.querySelector('.display').innerHTML=`the area is ${area}`;
  };
    useEffect(()=>{console.log('this calculation has not been done');},[area]);


  return (
    <>
      <input
        type="number"
        className="inp1 border-3"
        placeholder="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <input
        type="number"
        className="inp border-3"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <button onClick={view}>Click me to know the area</button>
      <p className="display">thi region will show area</p>
    </>
  );
}

export default App;*/