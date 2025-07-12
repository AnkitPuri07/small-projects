import { useState,useEffect,useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let a=0;
    let inputref1 = useRef(0);
        let inputref2 = useRef(0);
            let inputref3 = useRef(0);

function addBgColor1() {
  inputref1.current.focus();
  inputref1.current.style.backgroundColor= 'red'; 
 inputref2.current.style.backgroundColor= 'green'; 
 inputref3.current.style.backgroundColor= 'green'; 
  }
function addBgColor2() {
  inputref2.current.focus();
  inputref2.current.style.backgroundColor= 'red'; 
 inputref1.current.style.backgroundColor= 'green'; 
 inputref3.current.style.backgroundColor= 'green'; 
  }
  function addBgColor3() {
  inputref3.current.focus();
  inputref3.current.style.backgroundColor= 'red'; 
 inputref1.current.style.backgroundColor= 'green'; 
 inputref2.current.style.backgroundColor= 'green'; 
  }

console.log('hi');


  return (
   <>   
    <button onClick={addBgColor1}>click me</button>
<input className='border border-green border-2 rounded-lg' ref={inputref1} />
 <button onClick={addBgColor2}>click me</button>
<input className='border border-green border-2 rounded-lg' ref={inputref2} />
 <button onClick={addBgColor3}>click me</button>
<input className='border border-green border-2 rounded-lg' ref={inputref3} />
    </>
 
  );
}

export default App
