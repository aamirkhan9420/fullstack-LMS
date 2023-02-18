import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import {  HamburgerIcon } from "@chakra-ui/icons"

function Navbar() {
   let isToken=localStorage.getItem("token")
   let navigate=useNavigate()
   return (

      <Flex w={"100%"} boxShadow="sm" height={"80px"} bgColor="pink.100" align={"center"} justifyContent="space-evenly" >
         <Box>
            <Link to={"/"}>
               <Image src='https://www.masaischool.com/img/navbar/logo.svg' />
            </Link>
         </Box>
         <Flex display={["none", "none", "none", "flex"]} align={"center"} justifyContent="space-evenly" width={"70%"} fontSize={['10px', '14px', '16px', '16px']} color="teal.900" fontWeight={500}>
            <Box>
               <Link to={"/addassignment"}>
                  Add-Assignments
               </Link>
            </Box>
            <Box>
               <Link to={"/addlecture"}>
                  Add-Lectures
               </Link>
            </Box>
            <Box>
               <Link to={"/student"}>
                  Student
               </Link>
            </Box>
            <Box>
               <Link to={"/blockstudent"}>
               BlockList
               </Link>
            </Box>
            <Box>
               
               {isToken?
               <Menu>
               <MenuButton
                   as={IconButton}
                   aria-label='Options'
                   icon={<VscAccount />}
               />
              
               <MenuList >

                   <MenuItem  onClick={() => {localStorage.removeItem("token") 
                    navigate("/")
                  }}>Logout</MenuItem>

               </MenuList>
           </Menu>
               
               :<Link to={"/signup"}>
                SignUp
               </Link>}
              
            </Box>
         </Flex>

         <Menu>
            <MenuButton
               as={IconButton}
               aria-label='Options'
               icon={<HamburgerIcon />}

               display={["flex", "flex", "flex", "none"]}
            />
            <MenuList>
               <MenuItem >
                  <Box>
                     <Link to={"/addassignment"}>
                        Add-Assignments
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem >
                  <Box>
                     <Link to={"/addlecture"}>
                        Add-Lectures
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem >
                  <Box>
                     <Link to={"/student"}>
                     Student
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem  >
                  <Box>
                     <Link to={"/blockstudent"}>
                        BlockList
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem  >
                  <Box>
                     
                     {isToken?
                        <Text onClick={() => {localStorage.removeItem("token") 
                        navigate("/")
                      }}> LogOut</Text> 
                     :<Link to={"/"}>
                        SignUp
                     </Link>}
                  </Box>
               </MenuItem>
            </MenuList>
         </Menu>

      </Flex>

   )

}

export default Navbar