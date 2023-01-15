import React, { useContext } from 'react'
import { CounterContext } from '../../context/MainContext'

export default function CounterShow() {
    const [count] = useContext(CounterContext)
  return (
    <h1>Calculator app : {count}</h1>
  )
}