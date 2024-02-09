import './App.css'
import { useState } from 'react';

function App() {

  // usestate is a hook to change the value in UI at all the locations
  let [value,setvalue] = useState(0)

  const addvalue = ()=>{
    if(value<20)
    {
      value+=1;
      setvalue(value);
    }
  }
  const removevalue = ()=>{
    if(value!=0)
    {
      value-=1;
      setvalue(value);
    }
  }
  return (
    <>
      <h1>hi devansh</h1>
      <h1>Counter value: {value}</h1>

      <button onClick={addvalue}>Add counter : {value}</button>
      <br />      
      <button onClick={removevalue}>Remove counter : {value}</button>      
    </>
  )
}

export default App
