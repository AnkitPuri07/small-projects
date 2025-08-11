import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputBox></InputBox>
        <InputBox></InputBox>
  {/* Convert Button */}
  <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
    Convert USD to INR
  </button>

    </>
  )
}

export default App
