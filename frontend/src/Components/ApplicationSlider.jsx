import { Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, Input, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'



export default function ApplicationSlider({ application, getApplicationList, OpenModal }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let [idel, setIdel] = useState(0)
  let toast = useToast()
  let removeFromApplicationList = (id) => {

    fetch(`https://lms-iliv.onrender.com/application//removeapplicant/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => res.json())
      .then((res) => {
        console.log(res.msg)
        setIdel(idel + 1)
        toast({
          description: res.msg,
          status: "success",
          isClosable: true,
          duration: 9000,
          position: "top"
        })

      }).catch((e) => console.log(e))

  }
  useEffect(() => {
    getApplicationList()
  }, [idel])

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Application
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="lg"
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#66b9bf"}>
          <DrawerCloseButton fontSize={20} color={"white"} />
          <DrawerHeader fontSize={25} fontWeight={600} color={"white"}>Applications</DrawerHeader>

          <DrawerBody >
            <Box>
              <Grid gap={2} >

                {application.length > 0 && application.map((el, index) => (
                  <Box key={index} boxShadow={"sm"} bgColor={"white"} color={"black"} fontWeight={500} border={"1px solid gray"} p={3} borderRadius={10}>

                    <Text>Name: {el.name}</Text>
                    <Text>Email: {el.email}</Text>
                    <Text>State: {el.state}</Text>
                    <Text>Course: {el.course} <Badge variant='outline' colorScheme='green'>{el.coursetime}</Badge></Text>

                    <Box display={"flex"} gap={2}>
                    <Button variant='outline' colorScheme='red' onClick={() => removeFromApplicationList(el._id)}>Reject</Button>
                    <Button variant='outline' p={5} colorScheme='green' onClick={() => OpenModal(el)}>Add</Button></Box>
                    </Box>
                ))}
              </Grid>
            </Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>

    </>
  )
}