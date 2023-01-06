import React, { useContext } from 'react'
import { CounterContext } from '../../context/MainContext'

export default function CounterShow() {
    const [count] = useContext(CounterContext)
  return (
    <h1>Clicking app : {count}</h1>
  )
}