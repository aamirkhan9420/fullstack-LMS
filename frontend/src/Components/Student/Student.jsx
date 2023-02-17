import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Box, Button, Grid, GridItem, Image, Text, useDisclosure, useToast, FormControl, FormLabel, Input
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Student() {
  let [student, setStudent] = useState([])
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [studentId, setStudentId] = useState("")
  let [img, setImg] = useState("")
  let [idle,setIdel]=useState(0)
  let navigate = useNavigate()


  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  let isToken=localStorage.getItem("token")

  let toast = useToast()
  let getStudentList = () => {
    fetch("https://lms-iliv.onrender.com/adminwork/getStudentsList", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => res.json())
      .then((res) => {
        console.log(res.msg)
        setStudent(res.msg)

      }).catch((e) => console.log(e))
  }
  let handleBlock = (id) => {
    console.log(id)
    fetch(`https://lms-iliv.onrender.com/adminwork/blockStudent/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => res.json())
      .then((res) => {
        console.log(res.msg)
       setIdel(idle+1)
        toast({
          description: res.msg,
          status: "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })

      }).catch((e) => console.log(e))
  }
  let handleNewStudent = () => {
    if (name && email && img && studentId) {
      let payload = {
        name: name,
        student_id: studentId,
        image: img,
        email: email,

      }
      fetch("https://lms-iliv.onrender.com/adminwork/createStudent", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }


      }).then((res) => res.json()).then((res) => {
        console.log(res)
        setIdel(idle+1)
        toast({
          description: res.msg,
          status: "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })
        student.length++
        onClose()

      }).catch((er) => console.log(er))
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
  let handleEdit = (el) => {
    navigate("/edit", { state: el })
  }

  useEffect(() => { 
    if(!isToken){
    navigate("/login")
      }
    getStudentList()
  }, [idle])
 
  return (
    <Box>
      <Button onClick={onOpen}>Add Student</Button>
      <Box m="auto" p={5}>

        <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6} >
          {student.length > 0 && student.map((el, index) => (
            <Box border={"1px solid gray"} key={index} boxShadow={"md"} borderRadius={10}>
              <Box h={"50%"} m="auto" w={"100%"}>
                <Image borderRadius={10} h={"100%"} w={"100%"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXCTlMvfcUMsJ4r4seTYMY8_k8V31eV3LKUxkdR34n0BurNYuarum86BROpRlbhoQlxU&usqp=CAU' />
              </Box>
              <Box display={"flex"} h={"30%"} flexDir="column" justifyContent={"space-between"} >
                <Text>{`name: ${el.name}`}</Text>
                <Text>{`Student-ID: ${el.student_id}`}</Text>
                <Text>{`Email-ID: ${el.email}`}</Text>
              </Box>
              <Box p={2} display={"flex"} justifyContent={"space-evenly"} alignItems={"start"}><Button onClick={() => handleBlock(el._id)}>Block</Button><Button onClick={() => handleEdit(el)}>Edit</Button></Box>
            </Box>
          ))}

        </Grid>
      </Box>
      {/* modal to add student */}
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Student</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} ref={initialRef} placeholder='Student Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} ref={initialRef} placeholder='Student Email' />
              </FormControl>
              <FormControl>
                <FormLabel>Student-ID</FormLabel>
                <Input value={studentId} onChange={(e) => setStudentId(e.target.value)} ref={initialRef} placeholder='Student-ID' />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input value={img} onChange={(e) => setImg(e.target.value)} ref={initialRef} placeholder=' Student Image Url' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={() => handleNewStudent()}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  )
}

export default Student