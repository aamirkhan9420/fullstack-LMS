import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GridComp from '../GridComp/GridComp'


function Lecture() {
  let [lecture, setLecture] = useState([])
  let [topic_name, setTopic_name] = useState([])
  let [lecture_date, setLecture_date] = useState([])
  let [lecture_time, setLecture_time] = useState([])
  let [teacher_name, setTeacher_name] = useState([])
  let [lecture_id, setlecture_id] = useState([])
  let [lecture_type, setlecture_type] = useState([])

  
  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  let getLectures = () => {
    fetch("https://lms-iliv.onrender.com/adminwork/getLectures", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }

    }).then((res) => res.json()).then((res) => {

      // console.log(res.msg)
      setLecture(res.msg)
    }).catch((er) => console.log(er))
  }
  let handleNewLecture=()=>{

  }
  useEffect(() => {
    getLectures()
  }, [])
  return (
    <Box p={{ sm: 30, md: 30, lg: 100 }}>
      <Button bg={"blue.500"} color={"white"} onClick={onOpen}>Add Student</Button>

      <GridComp prop={lecture} />
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
            <ModalHeader>Add New Lecture</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Topic Name</FormLabel>
                <Input value={topic_name} onChange={(e) => setTopic_name(e.target.value)} ref={initialRef} placeholder='Topic Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Date</FormLabel>
                <Input value={lecture_date} onChange={(e) => setLecture_date(e.target.value)} ref={initialRef} placeholder='Lecture Email' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Time</FormLabel>
                <Input value={lecture_time} onChange={(e) => setLecture_time(e.target.value)} ref={initialRef} placeholder='Lecture Time' />
              </FormControl>
              <FormControl>
                <FormLabel>Teacher Name</FormLabel>
                <Input value={teacher_name} onChange={(e) => setTeacher_name(e.target.value)} ref={initialRef} placeholder=' Teacher Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Id</FormLabel>
                <Input value={lecture_id} onChange={(e) => setlecture_id(e.target.value)} ref={initialRef} placeholder=' Lecture Id' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Type </FormLabel>
                <Input value={lecture_type} onChange={(e) => setlecture_type(e.target.value)} ref={initialRef} placeholder=' Lecture Type' />
              </FormControl>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={() => handleNewLecture()}>
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

export default Lecture