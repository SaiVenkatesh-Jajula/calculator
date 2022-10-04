import React,{ useState} from 'react'
import './App.css'

export const App = () => {
//useState()  
const [num,setNum]=useState("");
const [num2,setNum2]=useState("");
const [ans,setAns]=useState("?");
const [operation,setOp]=useState("Result");
//onchange eventhandler
const eh=e=>{
  setNum(e.target.value)
}
const eh2=e=>{
  setNum2(e.target.value)
}
//function return 
  return (
    <div className='App'>
        <h1>Calculator Application</h1>
        <img src='/calculatormain.jpg'/>
        <br/>
      <input className='inputs' type='text' placeholder="Enter First number" value={num} onChange={eh}/>
      <br/>
      <input className='inputs' type='text' placeholder='Enter Second number' value={num2} onChange={eh2}/>
      <br/>
      <div className='buttons'>
      <button onClick={()=>{
        setAns(parseInt(num)+parseInt(num2)) 
        setOp("Addition")}
            }>Addition</button>
      <button onClick={()=>{
      setAns(parseInt(num)-parseInt(num2))
      setOp("Subraction") }
      }>Subract</button>
      <button onClick={()=>{
        setAns(parseInt(num)*parseInt(num2))
        setOp("Multiplication")}
      }>Multiplication</button>
      <button onClick={()=>{
        setAns(parseInt(num)/parseInt(num2))
        setOp("Division")
      }}>Division</button>
      <button onClick={()=>{
        setAns(parseInt(num)%parseInt(num2))
        setOp("Modulo Divison")
      }}>Modulo</button>
      </div>


      <h2>The ++{operation} of these two numbers is <b>{ans}</b></h2>
    </div>
  )
}
export default App;