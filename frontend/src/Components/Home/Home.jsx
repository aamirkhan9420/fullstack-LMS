import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Home() {

  return (
    <Box bgColor={"#080710"}  margin={"auto"} p={2} h={"100vh"} display={"flex"} alignItems={"center"}>

    
    <Box  bgColor={"rgba(255,255,255,0.13)"} shadow={"lg"} w="fit-content" p={"5%"} m="auto"  display={"flex"} flexDir={"column"} alignItems="center" justifyContent={"space-between"} gap={2} borderRadius={10}>
     <Image src='https://masaischool.com/img/footer/masai-logo.svg' />
      <Box>
        <Link to={"/signup"} >
          <Button bgColor={"green"} minW={200} color={"white"} onClick={()=>{localStorage.setItem("user","admin")}}>Admin</Button>
        </Link>
      </Box>
      <Link to={"/signup"}>
        <Box><Button bgColor={"green"} minW={200} color={"white"} onClick={()=>{localStorage.setItem("user","student")}}>Student</Button></Box>
      </Link>
    </Box>
</Box>
  )
}

export default Home