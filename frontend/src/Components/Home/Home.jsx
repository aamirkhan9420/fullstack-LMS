import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Home() {

  return (
    <>

    <Box bgColor={"#66b9bf"} shadow={"lg"} w="fit-content" p={"5%"} m="auto" mt={"25vh"} display={"flex"} alignItems="center" justifyContent={"space-between"} gap={2} borderRadius={10}>
     
      <Box>
        <Link to={"/signup"} >
          <Button bgColor={"green"} color={"white"} onClick={()=>{localStorage.setItem("user","admin")}}>Admin</Button>
        </Link>
      </Box>
      <Link to={"/signup"}>
        <Box><Button bgColor={"green"} color={"white"} onClick={()=>{localStorage.setItem("user","student")}}>Student</Button></Box>
      </Link>
    </Box>
</>
  )
}

export default Home