import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("black")


  return (
    <div className='w-full h-screen justify-center fixed flex flex-wrap items-center' style = {{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center bg-blue-400 p-4 rounded-xl'>
          <button className='bg-red-600 text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("red")}>Red</button>
          <button className='bg-white text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("white")}>White</button>
          <button className='bg-pink-400 text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("pink")}>Pink</button>
          <button className='bg-green-600 text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("green")}>Green</button>
          <button className='bg-yellow-400 text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("yellow")}>Yellow</button>
          <button className='bg-blue-600 text-black p-2 mr-10 rounded-xl cursor-pointer' onClick={()=> setcolor("blue")}>Blue</button>
          <button className='bg-black text-white p-2  rounded-xl cursor-pointer' onClick={()=> setcolor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
