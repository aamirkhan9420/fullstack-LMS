import { Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'



export default  function ApplicationSlider({application}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
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
            <DrawerCloseButton />
            <DrawerHeader fontSize={25} fontWeight={600} color={"white"}>Applcations</DrawerHeader>
  
            <DrawerBody >
             <Box>
                <Grid gap={2} >

                   { application.length>0&& application.map((el,index)=>(
                    <Box key={index} boxShadow={"sm"} bgColor={"white"} color={"black"} fontWeight={500} border={"1px solid gray"} p={3} borderRadius={10}>
                        <Text>Name: {el.name}</Text>
                        <Text>Email: {el.email}</Text>
                        <Text>State: {el.state}</Text>
                        <Text>Course: {el.course} <Badge variant='outline' colorScheme='green'>{el.coursetime}</Badge></Text>
                        
                        <Box><Button variant='outline' colorScheme='red'>Reject</Button><Button variant='outline' p={5} colorScheme='green'>Add</Button></Box>
 

                        

                        
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