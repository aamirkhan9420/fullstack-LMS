import { Box, Button, Image, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function Login() {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  let user = localStorage.getItem("user")


  let navigate = useNavigate()
  let toast = useToast()

  let handleForm = () => {
    let payload = { email, password }
    if (email && password) {
      setLoading(true)

      axios.post(`https://lms-iliv.onrender.com/${user}/login`, payload).then((res) => {
        let l = Object.keys(res.data).length

        localStorage.setItem("currentUser", JSON.stringify(res.data))
        localStorage.setItem("token", res.data.token)
        toast({
          description: res.data.msg,
          status: l === 1 ? "error" : "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })

        setLoading(false)
        if (user === "admin" && l != 1) {
          navigate("/student")
        } else if (user === "student" && l != 1) {
          navigate("/courses")
        }

      }).catch((er) => {
        console.log(er)
      })
    } else {
      toast({
        description: "all fields required",
        status: "error",
        isClosable: true,
        duration: 9000,
        position: "top"
      })
    }
  }
  return (
    <Box bgColor={"#080710"} p={2} h={"100vh"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
    
      <Box >
        <Link to={"/"}>
          <Image src='https://masaischool.com/img/footer/masai-logo.svg' />
        </Link>
      </Box>


      <Box bgColor={"#66b9bf"} color={"white"} shadow={"lg"} w="fit-content" p={"3%"} borderRadius={10} display={"flex"} flexDir="column" alignItems="center" justifyContent={"center"} gap={5}>
        <Text fontWeight={600} fontSize={25}>Login</Text>

        <InputGroup size='md'>
          <Input bgColor={"white"} color={"black"} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
            bgColor={"white"}
            color={"black"}
          />

          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              <ViewIcon color={"black"} />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button onClick={handleForm} bgColor={"green"} isLoading={isLoading ? true : false} loadingText="Submitting">
          submit
        </Button>
        <Text fontWeight={600} fontSize={20}>Don't have an account?</Text>
        <Text color={"blue"} fontWeight={600} fontSize={20}>
          <Link to={"/signup"}>
            SignUp
          </Link>
        </Text>
      </Box>
    </Box>
  )
}

export default Login