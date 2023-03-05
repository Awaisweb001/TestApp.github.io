import React from 'react'
import Form from './Form'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CV from './Cv'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [userdata,setUserdata]=React.useState()
  const [Getdata,setGetdata]=React.useState()


  const handleChange =  (e)=>{
    setUserdata({
      ...userdata,[e.target.name]:e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:200/post", userdata).then(resp => {
      console.log(resp,'datadata');
    setGetdata(resp.data)
    localStorage.setItem('student',JSON.stringify(resp.data))
  })
}
  return (
    <>

{/* <Form  handleChange={handleChange} handleSubmit={handleSubmit} /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form  handleChange={handleChange} handleSubmit={handleSubmit} />}></Route>
        <Route path='/cv' element={<CV />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
