import { Box, Button, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from "@chakra-ui/icons"
import {  useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'
function Signup() {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

 
  let navigate=useNavigate()
  let toast=useToast()
  let user=localStorage.getItem("user")
  let handleForm=()=>{
    let payload={name,email,password}
    if(name&&email&&password){
  
      axios.post(`https://lms-iliv.onrender.com/${user}/signup`,payload).then((res)=>{
       console.log(res.data.msg)
       if(res.data.msg==="your blocked!"){
        toast({
          description:res.data.msg,
          status:"error",
          isClosable:true,
          duration:9000,
          position:"top"
      })
       }else{

         toast({
             description:res.data.msg,
             status:"success",
             isClosable:true,
             duration:9000,
             position:"top"
         })
         navigate("/login")
       }
      }).catch((er)=>{
       console.log(er)
       
      })
    }else{
      toast({
        description:"all fields required",
        status:"error",
        isClosable:true,
        duration:9000,
        position:"top"
    })
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
      <Text>If have created account</Text>
      <Text color={"blue"}>
        <Link to={"/login"}>
          LogIn
        </Link>
      </Text>
    </Box>

  )
}

export default Signup