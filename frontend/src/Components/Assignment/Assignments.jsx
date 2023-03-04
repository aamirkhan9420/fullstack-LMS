import { Box, Button, FormControl, FormLabel, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, useDisclosure, useToast } from '@chakra-ui/react'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

let GridComp=lazy(()=>wait(1000).then(()=>import('../GridComp/GridComp')))
function Assignments() {
  let [assignment, setAssignment] = useState([])
  let [topic_name, setTopic_name] = useState("")
  let [assignment_date, setAssignment_date] = useState("")
  let [assignment_time, setAssignment_time] = useState("")
  let [teacher_name, setTeacher_name] = useState("")
  let [assignment_id, setAssignment_id] = useState("")
  let [course,setCourse]=useState("")
  let [assignment_type, setAssignment_type] = useState(false)
  let [temp, setTemp] = useState("")
  let [editId, setEditId] = useState("")
  let navigate=useNavigate()
  let isToken=localStorage.getItem("token")
  let user=localStorage.getItem("user")


  let [idle, setIdel] = useState(0)
  let toast = useToast()
  let yearnow = new Date().getFullYear()
  let monthnow = new Date().getMonth() + 1;
  monthnow = monthnow.toString()
  let daynow = new Date().getDate().toString()

  let currdate = `${yearnow}-${monthnow.length === 1 ? 0 + monthnow : monthnow}-${daynow.length === 1 ? 0 + daynow : daynow}`

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  let getAssignment = () => {
    fetch("https://lms-iliv.onrender.com/adminwork/getassignment", {
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




  let handleNewassignment = () => {


    if (topic_name && assignment_date && assignment_time && teacher_name && assignment_id && assignment_type) {

      const topic_name_upper = topic_name.charAt(0).toUpperCase() + topic_name.slice(1);
      teacher_name = teacher_name.charAt(0).toUpperCase() + teacher_name.slice(1);

      let payload = {
        topic_name: topic_name_upper,
        assignment_date,
        assignment_time,
        teacher_name,
        assignment_id,
        course,
        assignment_type: assignment_type.toString().toUpperCase()

      }
      onClose()
      let url = temp ? `https://lms-iliv.onrender.com/adminwork/editassignment/${editId}` : "https://lms-iliv.onrender.com/adminwork/createassignment"
      let method = temp ? "PATCH" : "POST"
      fetch(url, {
        method: method,
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }


      }).then((res) => res.json()).then((res) => {
        console.log(res)
        setIdel(idle + 1)
        toast({
          description: res.msg,
          status: "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })


        setTemp(false)

      }).catch((er) => console.log(er))
    } else {
      setTemp(false)
      toast({
        description: "all fields required",
        status: "error",
        isClosable: true,
        duration: 9000,
        position: "top"
      })
    }
  }
  let handleDelete = (id) => {

    fetch(`https://lms-iliv.onrender.com/adminwork/removeassignment/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => res.json())
      .then((res) => {
        console.log(res.msg)
        setIdel(idle + 1)
        toast({
          description: res.msg,
          status: "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })


      }).catch((e) => console.log(e))
  }
  let handleModal = (e) => {


    setTopic_name(e.topic_name)
    setAssignment_date(e.assignment_date)
    setAssignment_time(e.assignment_time)
    setTeacher_name(e.teacher_name)
    setAssignment_id(e.assignment_id)
    setAssignment_type(e.assignment_type)
    setCourse(e.course)
    setTemp(true)
    setEditId(e._id)
    onOpen()

  }

  useEffect(() => {
    if(!isToken||user==="student"){
    navigate("/")
    }
    getAssignment()
  }, [idle])
  return (
    <>
     <Navbar />
    <Box m={"auto"} p={{ sm: 30, md: 30 }}>
     
      <Button mb={6} mt={6}  bg={"green"} color={"white"} onClick={onOpen}>Add Assignment</Button>

      <Suspense fallback={<Box m={"auto"} mt={"40vh"}><Spinner /></Box>}>

      <GridComp prop={assignment} handleDelete={handleDelete} handleModal={handleModal} />
      </Suspense>


 {/* modal to add Assignment */}
 <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Assignment</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Topic Name</FormLabel>
                <Input value={topic_name} onChange={(e) => setTopic_name(e.target.value)} ref={initialRef} placeholder='Topic Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Assignment Date</FormLabel>
                <Input min={currdate} type="date" value={assignment_date} onChange={(e) => setAssignment_date(e.target.value)} ref={initialRef} placeholder='Assignment Date' />
              </FormControl>
              <FormControl>
                <FormLabel>Assignment Time</FormLabel>
                <Input type={"time"} value={assignment_time} onChange={(e) => setAssignment_time(e.target.value)} ref={initialRef} placeholder='Assignment Time' />
              </FormControl>
              <FormControl>
                <FormLabel>Teacher Name</FormLabel>
                <Input value={teacher_name} onChange={(e) => setTeacher_name(e.target.value)} ref={initialRef} placeholder=' Teacher Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Assignment Id</FormLabel>
                <Input value={assignment_id} onChange={(e) => setAssignment_id(e.target.value)} ref={initialRef} placeholder=' Assignment Id' />
              </FormControl>
              <FormControl>
                <FormLabel>Course </FormLabel>
                <Select value={course} onChange={(e) => setCourse(e.target.value)} ref={initialRef}>
                  <option value="">Select Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Backend Development">Backend Development</option>
                </Select>
              </FormControl>
             
              <FormControl>
                <FormLabel>Assignment Type </FormLabel>
                <Select value={assignment_type} onChange={(e) => setAssignment_type(e.target.value)} ref={initialRef}>
                  <option value="">Select Assignment Type</option>
                  <option value="DSA">DSA</option>
                  <option value="CODING">CODING</option>

                </Select>
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={() => handleNewassignment()}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

    </Box>
    </>
  )
}

export default Assignments
let wait=(t)=>{
  return new Promise(res=>{
    setTimeout(() => {
        res()
    }, t);
  })
}