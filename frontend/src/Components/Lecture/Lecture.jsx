import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, useDisclosure, useToast } from '@chakra-ui/react'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

let GridComp=lazy(()=>wait(1000).then(()=>import('../GridComp/GridComp')))

function Lecture() {
  let [lecture, setLecture] = useState([])
  let [topic_name, setTopic_name] = useState("")
  let [lecture_date, setLecture_date] = useState("")
  let [lecture_time, setLecture_time] = useState("")
  let [teacher_name, setTeacher_name] = useState("")
  let [lecture_id, setlecture_id] = useState("")
  let [course,setCourse]=useState("")

  let [lecture_type, setlecture_type] = useState(false)
  let [temp,setTemp]=useState("")
  let [editId,setEditId]=useState("")
  let [modalheading,setModalheading]=useState("")
  
  let isToken = localStorage.getItem("token")
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))

  let user=localStorage.getItem("user")
  let navigate = useNavigate()

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


  let getLectures = () => {
    fetch("https://lms-iliv.onrender.com/adminwork/getLectures", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }

    }).then((res) => res.json()).then((res) => {

      console.log(res.msg)
      setLecture(res.msg)
    }).catch((er) => console.log(er))
  }
  let handleNewLecture = () => {


    if (topic_name && lecture_date && lecture_time && teacher_name && lecture_id && lecture_type) {

      const topic_name_upper = topic_name.charAt(0).toUpperCase() + topic_name.slice(1);
      teacher_name = teacher_name.charAt(0).toUpperCase() + teacher_name.slice(1);

      let payload = {
        topic_name: topic_name_upper,
        lecture_date,
        lecture_time,
        teacher_name,
        lecture_id,
        course,
        lecture_type: lecture_type.toString().toUpperCase()

      }
      onClose()
      let url=temp?`https://lms-iliv.onrender.com/adminwork/editlecture/${editId}`:"https://lms-iliv.onrender.com/adminwork/createLecture"
      let method=temp?"PATCH":"POST"
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
   
    fetch(`https://lms-iliv.onrender.com/adminwork/removelecture/${id}`, {
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
  let handleModal=(e)=>{
  
   
    setTopic_name(e.topic_name)
    setLecture_date(e.lecture_date)
    setLecture_time(e.lecture_time)
    setTeacher_name(e.teacher_name)
    setlecture_id(e.lecture_id)
    setlecture_type(e.lecture_type)
    setCourse(e.course)
    setTemp(true)
    setEditId(e._id)
    setModalheading("Edit Lecture")
     onOpen()
   
  }
  let handleModalforNewLecture=()=>{
    setModalheading("")
    onOpen()
  }


  useEffect(() => {
    if (!isToken||currentUser.person==="student") {
      navigate("/")
    }
    getLectures()
  }, [idle])
  return (
    <>
     <Navbar />
    <Box m={"auto"} p={{ sm: 30, md: 30 }} >
      <Button mb={6} mt={6}  bg={"green"} color={"white"} onClick={handleModalforNewLecture}>Add Lecture</Button>
<Suspense fallback={<Box m={"auto"} mt={"40vh"}><Spinner /></Box>}>

      <GridComp prop={lecture} handleDelete={handleDelete}  handleModal={handleModal}/>
</Suspense>

      {/* modal to add lecture */}
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalheading!=""?modalheading: "Add New Lecture"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Topic Name</FormLabel>
                <Input value={topic_name} onChange={(e) => setTopic_name(e.target.value)} ref={initialRef} placeholder='Topic Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Date</FormLabel>
                <Input min={currdate} type="date" value={lecture_date} onChange={(e) => setLecture_date(e.target.value)} ref={initialRef} placeholder='Lecture Date' />
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Time</FormLabel>
                <Input type={"time"} value={lecture_time} onChange={(e) => setLecture_time(e.target.value)} ref={initialRef} placeholder='Lecture Time' />
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
                <FormLabel>Course </FormLabel>
                <Select value={course} onChange={(e) => setCourse(e.target.value)} ref={initialRef}>
                  <option value="">Select Course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Backend Development">Backend Development</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Lecture Type </FormLabel>
                <Select value={lecture_type} onChange={(e) => setlecture_type(e.target.value)} ref={initialRef}>
                  <option value="">Select Lecture Type</option>
                  <option value="LIVE">LIVE</option>
                  <option value="VIDEO">VIDEO</option>

                </Select>
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
    </>
  )
}

export default Lecture

let wait=(t)=>{
  return new Promise(res=>{
    setTimeout(() => {
        res()
    }, t);
  })
}