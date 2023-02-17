import React, { useEffect, useState } from 'react'
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,  Button, useDisclosure,  FormControl, FormLabel, Input, Toast, useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
function Edit() {
     let location=useLocation()
     console.log(location.state)
    let [name,setName]=useState(location.state.name||"")
    let [email,setEmail]=useState(location.state.email||"")
    let [studentId,setStudentId]=useState(location.state.student_id)
    let [img,setImg]=useState(location.state.image)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    let toast=useToast()
    let navigate=useNavigate()
    let handleNewStudent=()=>{
        let payload={
            name:name,
            student_id:studentId,
            image:img,
            email:email,
        }

        fetch(`https://lms-iliv.onrender.com/adminwork/editStudent/${location.state._id}`,{
            method:'PATCH',
            body:JSON.stringify(payload),
            headers:{
              'Content-Type': 'application/json',
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }).then((res)=>res.json()).then((res)=>{
            toast({
                description:res.msg,
                status:"success",
                isClosable:true,
                duration:9000,
                position:"top"
            })
            navigate("/student")
        }).catch((er)=>console.log(er))
    }
    let handleCancel=()=>{
        navigate("/student")
    }
    useEffect(()=>{
      onOpen()
    },[])
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Student</ModalHeader>
        
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e)=>setName(e.target.value)} ref={initialRef} placeholder='Student Name' />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} ref={initialRef} placeholder='Student Email' />
            </FormControl>
            <FormControl>
              <FormLabel>Student-ID</FormLabel>
              <Input value={studentId} onChange={(e)=>setStudentId(e.target.value)} ref={initialRef} placeholder='Student-ID' />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input value={img} onChange={(e)=>setImg(e.target.value)} ref={initialRef} placeholder=' Student Image Url' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleNewStudent()}>
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Edit