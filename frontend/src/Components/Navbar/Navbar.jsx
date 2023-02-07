import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

function Navbar() {
   return (



      <Flex w={"100%"} boxShadow="sm" height={"80px"} bgColor="pink.100" align={"center"} justifyContent="space-evenly" >
         <Box>
            <Link to={"/"}>
               <Image src='https://www.masaischool.com/img/navbar/logo.svg' />
            </Link>
         </Box>
         <Flex display={["none", "none", "none", "flex"]} align={"center"} justifyContent="space-evenly" width={"70%"} fontSize={['10px', '14px', '16px', '18px']} color="teal.900" fontWeight={500}>
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
               <Link to={"/addstudent"}>
                  Add-Student
               </Link>
            </Box>
            <Box>
               <Link to={"/addblockstudent"}>
                  Add-BlockList
               </Link>
            </Box>
            <Box>
               signup/login
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
                     <Link to={"/addstudent"}>
                        Add-Student
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem  >
                  <Box>
                     <Link to={"/addblockstudent"}>
                        Add-BlockList
                     </Link>
                  </Box>
               </MenuItem>
               <MenuItem  >
                  <Box>
                     <Link to={"/"}>
                        signup/login
                     </Link>
                  </Box>
               </MenuItem>
            </MenuList>
         </Menu>

      </Flex>

   )

}

export default Navbar