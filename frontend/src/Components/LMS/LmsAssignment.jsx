import { Box, Spinner, Text } from '@chakra-ui/react'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import LmsNavbar from './LmsNavbar'
let GridComp=lazy(()=>wait(1000).then(()=>import('../GridComp/GridComp')))

function LmsAssignment() {
  let [assignment, setAssignment] = useState([])

    let getAssignment = () => {
        fetch("https://lms-iliv.onrender.com/studentWork/assignment", {
          method: "GET",
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
    
        }).then((res) => res.json()).then((res) => {
    
          console.log(res.msg)
          setAssignment(res.msg)
        }).catch((er) => console.log(er))
      }
useEffect(()=>{
   getAssignment()
},[])    
  return (
    <Box>
       <LmsNavbar />
       <Box mt={10}>
       <Suspense fallback={<Box m={"auto"} mt={"40vh"}><Spinner /></Box>}>
        <GridComp prop={assignment}/>
        </Suspense>
       </Box>
    </Box>
  )
}

export default LmsAssignment


let wait=(t)=>{
  return new Promise(res=>{
    setTimeout(() => {
        res()
    }, t);
  })
}