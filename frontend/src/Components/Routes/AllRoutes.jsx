import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Assignments from '../Assignment/Assignments'
import BlockStudent from '../BlockStudent/BlockStudent'

import Home from '../Home/Home'
import Lecture from '../Lecture/Lecture'
import Student from '../Student/Student'
import Login from '../UserLoginSignup/Login'
import Signup from '../UserLoginSignup/Signup'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/addlecture' element={<Lecture />}/>
        <Route path='/addassignment' element={<Assignments />}/>
        <Route path='/student' element={<Student />}/>
        <Route path='/blockstudent' element={<BlockStudent />}/>


      
        

    </Routes>
  )
}

export default AllRoutes