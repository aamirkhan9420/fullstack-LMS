import { Box, Button, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from "@chakra-ui/icons"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
function Signup() {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  let location=useLocation()
  let navigate=useNavigate()
  let toast=useToast()

  let handleForm=()=>{
    let payload={name,email,password}
    if(name&&email&&password){

      axios.post(`https://lms-iliv.onrender.com/${location.state}/signup`,payload).then((res)=>{
       console.log(res.data.msg)
       toast({
           description:res.data.msg,
           status:"success",
           isClosable:true,
           duration:9000,
           position:"top"
       })
       navigate("/login",{state:location.state})
      }).catch((er)=>{
       console.log(er)
       toast({
        description:"all fields required",
        status:"error",
        isClosable:true,
        duration:9000,
        position:"top"
    })
      })
    }else{

    }
  }
  return (

    <Box shadow={"lg"} w="fit-content" p={"3%"} m="auto" mt={"25vh"} borderRadius={10} display={"flex"} flexDir="column" alignItems="center" justifyContent={"center"} gap={5}>
          Signup 
      <InputGroup size='md'>
        <Input placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      </InputGroup>
      <InputGroup size='md'>
        <Input placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            <ViewIcon />
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button onClick={handleForm}>
        submit
      </Button>

    </Box>

  )
}

export default Signup