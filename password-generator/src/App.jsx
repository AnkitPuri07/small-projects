import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password,setPassword]=useState("");

  const passwordRef = useRef(null);

    const passwordGeneretor = useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(characterAllowed){
        str += "@#$%^&*";
      }
      if(numberAllowed){
        str += "0123456789";
      }
      for (let index = 0; index < length; index++) {
        let char=Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },[length,characterAllowed,numberAllowed])

    const copyToClipboard = ()=>{
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }

  useEffect(()=>{passwordGeneretor()},[length,characterAllowed,numberAllowed]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="container bg-white p-6 rounded shadow-lg">
   <div>
    <input
   value={password} 
  className="bg-blue-100 border border-blue-500 text-blue-900 placeholder-blue-700 
  focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded w-[50%]"
  ref={passwordRef}
/>
<button
  className='w-[10%] border border-blue-500 border-2 text-black-900 bg-blue-500 rounded-lg cursor-pointer text-lg
             active:bg-blue-700 active:shadow-lg active:shadow-blue-500/50 active:scale-105
             transition-all duration-50 ease-in-out'
  onClick={copyToClipboard}
>
  copy
</button>
  <br /><br />
    </div> 

<input type="range" min={4} max={25} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
<label className='text-yellow-600 text-lg font-bold'>length{length}</label> <br /><br />
<input type="checkbox" className='ml-4' defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed(prev => !prev)}} id='numberInput'/>
<label className='text-yellow-600 text-lg font-bold'>number</label><br /><br />
<input type="checkbox" className='ml-4' defaultChecked={characterAllowed} onChange={()=>{setCharacterAllowed(prev => !prev)}} id='characterInput'/>
<label className='text-yellow-600 text-lg font-bold'>character</label>
      </div>
    </div>
  );
}
export default App
