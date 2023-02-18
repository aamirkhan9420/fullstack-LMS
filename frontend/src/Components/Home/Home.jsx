import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <Box shadow={"lg"} w="fit-content" p={"5%"} m="auto" mt={"25vh"} display={"flex"} alignItems="center" justifyContent={"space-between"} gap={2} borderRadius={10}>
      <Box>
        <Link to={"/signup"} >
          <Button onClick={()=>{localStorage.setItem("user","admin")}}>Admin</Button>
        </Link>
      </Box>
      <Link to={"/signup"}>
        <Box><Button onClick={()=>{localStorage.setItem("user","student")}}>Student</Button></Box>
      </Link>
    </Box>

  )
}

export default Home