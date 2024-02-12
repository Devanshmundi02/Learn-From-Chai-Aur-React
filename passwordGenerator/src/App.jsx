import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [pass, setpass] = useState("")

  //useRef is a hook this give us a reference of any element of our page and then we can manipulate element using useRef 
  const passwordRef = useRef(null)

  //useCallback is a hook is used for memoize the function it store values in cache
  //useCallback take a function and a dependency array whenever like in any array dependency will update useCallback automatically memoize that too. 

  const copypassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass)
  },[pass])

  const passwordgenerator = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numallowed) str+="0123456789"
    if(charallowed) str+="`!@#$%^&*()+=/*-[]{}':;><,.?|_"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)

      password += str.charAt(char)      
    }
    setpass(password)
  },[length,numallowed,charallowed,setpass])

  // useEffect is hook whenever our page load firstly useEffect will call and its syntax just like useCallback its also take dependency array where whenever any thing of this array update it will call automatically again 

  useEffect(()=>{
    passwordgenerator()
  },[length,numallowed,charallowed,passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={passwordRef} type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
             <input type="range" min = {8} max={100} value={length} className='cursor-pointer'onChange={(e)=>{setlength(e.target.value)}} />
             <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked = {numallowed} id="numberinput" onChange={()=>{
              setnumallowed((prev)=>!prev);
            }} />
            <label htmlFor='numberinput'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked = {charallowed} id="charinput" onChange={()=>{
              setcharallowed((prev)=>!prev);
            }} />
            <label htmlFor='charinput'>Charaters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
