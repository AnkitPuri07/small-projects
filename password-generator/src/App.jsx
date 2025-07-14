import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="container bg-white p-6 rounded shadow-lg">
   <div>
    <input
  type="text"
  className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 
  focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded w-[50%]"
/>

  <button className='w-[10%] border border-blue-500 border-2 text-black-900 bg-blue-500 rounded-lg cursor-pointer text-lg'>copy</button>
  <br /><br />
    </div> 

<input type="range" />
<label className='text-yellow-600 text-lg font-bold'>length{length}</label>
<input type="checkbox" className='ml-4'/><label className='text-yellow-600 text-lg font-bold'>number</label>
<input type="checkbox" className='ml-4'/><label className='text-yellow-600 text-lg font-bold'>character</label>
      </div>
    </div>
  );
}
export default App
