import { useState } from 'react'
import Interface from './Interface'

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import Homepage from './Homepage'

function App() {


  return (
    <BrowserRouter>
      <Interface />

      <Routes>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
