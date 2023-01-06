import React, { useContext } from 'react'
import { CounterContext } from '../../context/MainContext'

export default function Clicker () {
    const [count,setcount] = useContext(CounterContext)
  return (
    <div>Clicker:  
        <button onClick={()=>{setcount(count+1)}}>+1</button> 
        <button onClick={()=>{setcount(count*10)}}>*10</button> 
        <button onClick={()=>{setcount(count-1)}}>-1</button>
        <button onClick={()=>{setcount(count/10)}}>/10</button> 
        <button onClick={()=>{setcount(0)}}>Reset</button> 
        <button onClick={()=>{window.close();}}>Exit</button> 
        <button onClick={()=>{window.open("https://www.aztu.edu.az", "_blank")}}>AzTu</button>
    </div>
  )
}