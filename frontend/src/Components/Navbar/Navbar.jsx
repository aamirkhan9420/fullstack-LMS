import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { HamburgerIcon } from "@chakra-ui/icons"
import { NavLink } from 'react-router-dom';

function Navbar() {
   let isToken = localStorage.getItem("token")
   let user=localStorage.getItem("user")
   let navigate = useNavigate()
   let { pathname } = useLocation()
   console.log(pathname)
   //=========for drawer=========//
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = useRef()
   return (

      <Flex zIndex={700} w={"100%"} boxShadow="sm" height={"80px"} alignItems={"center"} justifyContent="space-evenly" bgColor={"black"} position="sticky" top={0}  >
         <Box textAlign={"center"}>
            <Link to={"/"}>
               <Image src='https://masaischool.com/img/footer/masai-logo.svg' />
            </Link>
         </Box>
         <Flex display={["none", "none", "none", "flex"]} align={"center"} justifyContent="space-evenly" width={"70%"} fontSize={['10px', '14px', '16px', '16px']} color="teal.900" fontWeight={600}>
            {isToken && user==="admin"&&<Box color={"white"}>
               <NavLink to={"/addassignment"}>
                  Assignments
               </NavLink>
            </Box> 
            }
            {isToken&&user==="admin"&&<Box color={"white"}>
               <NavLink to={"/addlecture"}>
                  Lectures
               </NavLink>
            </Box>    
            }
            {isToken &&user=="admin"&&<Box color={"white"}>
               <NavLink to={"/student"}>
                  Students
               </NavLink>
            </Box>}
            {isToken &&user=="admin"&&<Box color={"white"}>
               <NavLink to={"/blockstudent"}>
                  BlockList
               </NavLink>
            </Box>}
           { isToken &&user=="admin"&& <Box color={"white"}>
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
                  : <NavLink to={"/signup"}>
                     SignUp
                  </NavLink>}


            </Box>}
         </Flex>
            
      

         {/* if screen size is small or medium */}
         {isToken &&user=="admin"&&
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
                        <Box  width="fit-content">
                           <Link to={"/"}>
                              <Image src='https://masaischool.com/img/footer/masai-logo.svg' />
                           </Link>
                        </Box>
                     </DrawerHeader>
                     <DrawerCloseButton color="white" />
                     <DrawerBody bgColor={"#66b9bf"} color="white" fontWeight={600}>
                        <Stack spacing={30}>


                           {isToken&& <Box onClick={onClose}>
                              <NavLink to={"/addassignment"} >
                                 Assignments
                              </NavLink>
                           </Box> 
                           }
                           {isToken&&<Box onClick={onClose}>
                              <NavLink to={"/addlecture"}>
                                 Lectures
                              </NavLink>
                           </Box> 
                           }
                           {isToken && <Box onClick={onClose}>
                              <NavLink to={"/student"}>
                                 Students
                              </NavLink>
                           </Box>}
                           {isToken && <Box onClick={onClose}>
                              <NavLink to={"/blockstudent"}>
                                 BlockList
                              </NavLink>
                           </Box>}
                           <Box onClick={onClose}>

                              {isToken ?
                                 <Text onClick={() => {
                                    localStorage.removeItem("token")
                                    navigate("/")
                                 }}> LogOut</Text>
                                 : <NavLink to={"/"}>
                                    SignUp
                                 </NavLink>}
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

