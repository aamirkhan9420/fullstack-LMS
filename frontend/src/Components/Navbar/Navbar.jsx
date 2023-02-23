import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { HamburgerIcon } from "@chakra-ui/icons"

function Navbar() {
   let isToken = localStorage.getItem("token")
   let navigate = useNavigate()

   //=========for drawer=========//
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = useRef()
   return (

      <Flex zIndex={700} w={"100%"} boxShadow="sm" height={"80px"} align={"center"} justifyContent="space-evenly" bgColor={"#66b9bf"} position="sticky"  top={0}  >
         <Box>
            <Link to={"/"}>
               <Image src='https://www.masaischool.com/img/navbar/logo.svg' />
            </Link>
         </Box>
         {isToken && <Flex  display={["none", "none", "none", "flex"]} align={"center"} justifyContent="space-evenly" width={"70%"} fontSize={['10px', '14px', '16px', '16px']} color="teal.900" fontWeight={600}>
            <Box color={"white"}>
               <Link to={"/addassignment"}>
                 Assignments
               </Link>
            </Box>
            <Box color={"white"}>
               <Link to={"/addlecture"}>
                  Lectures
               </Link>
            </Box>
            <Box color={"white"}>
               <Link to={"/student"}>
                  Student
               </Link>
            </Box>
            <Box color={"white"}>
               <Link to={"/blockstudent"}>
                  BlockList
               </Link>
            </Box>
            <Box color={"white"}>

               {isToken ?
                  <Menu >
                     <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<VscAccount />}
                        bg="variant"
                        fontSize={25}
                     />

                     <MenuList bgColor={"black"} color={"black"}>

                        <MenuItem onClick={() => {
                           localStorage.removeItem("token")
                           navigate("/")
                        }}>Logout</MenuItem>

                     </MenuList>
                  </Menu>

                  : <Link to={"/signup"}>
                     SignUp
                  </Link>}


            </Box>
         </Flex>}

         {/* if screen size is small or medium */}
         {isToken &&
            <>
               <HamburgerIcon aria-label='Options' as={HamburgerIcon} fontSize={30} color="white" onClick={onOpen} ref={btnRef} display={["flex", "flex", "flex", "none"]} />
               <Drawer
                  isOpen={isOpen}
                  placement='right'
                  onClose={onClose}
                  finalFocusRef={btnRef}


               >
                  <DrawerOverlay />
                  <DrawerContent>
                     <DrawerHeader bg={"black"}>
                        <Box bg="white" width="fit-content">
                           <Link to={"/"}>
                              <Image src='https://www.masaischool.com/img/navbar/logo.svg' />
                           </Link>
                        </Box>
                     </DrawerHeader>
                     <DrawerCloseButton  color="white"/>
                     <DrawerBody bgColor={"#66b9bf"} color="white" fontWeight={600}>
                        <Stack spacing={30}>


                           <Box onClick={onClose}>
                              <Link to={"/addassignment"} >
                                 Add-Assignments
                              </Link>
                           </Box>
                           <Box onClick={onClose}>
                              <Link to={"/addlecture"}>
                                 Lectures
                              </Link>
                           </Box>
                           <Box onClick={onClose}>
                              <Link to={"/student"}>
                                 Student
                              </Link>
                           </Box>
                           <Box onClick={onClose}>
                              <Link to={"/blockstudent"}>
                                 BlockList
                              </Link>
                           </Box>
                           <Box onClick={onClose}>

                              {isToken ?
                                 <Text onClick={() => {
                                    localStorage.removeItem("token")
                                    navigate("/")
                                 }}> LogOut</Text>
                                 : <Link to={"/"}>
                                    SignUp
                                 </Link>}
                           </Box>
                        </Stack>
                     </DrawerBody>
                  </DrawerContent>
               </Drawer>
            </>
         }


      </Flex>

   )

}

export default Navbar

