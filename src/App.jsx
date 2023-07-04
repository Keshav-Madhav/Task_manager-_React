import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./Input"
import List from './List'

function App() {
  const [data,setdata]=useState("")
  const [list,setList]=useState([])

  return (
    <>
      <Input data={data} handleData={setdata} handleList={setList}/>
      <List listData={list} handleListData={setList}/>
    </>
  )
}

export default App
