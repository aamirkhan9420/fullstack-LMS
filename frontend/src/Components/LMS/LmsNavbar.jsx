import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { HamburgerIcon } from "@chakra-ui/icons"
import StateKing from '../../Components/StateKing/StateKing';

function LmsNavbar({ inUserList }) {
    let isToken = localStorage.getItem("token")
    let navigate = useNavigate()
    let [kingImg, setKingImg] = useState("")
    let [kingName, setKingName] = useState("")

    //=========for drawer=========//
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    useEffect(() => {
        let obj = StateKing()
        setKingImg(obj.url)
        setKingName(obj.king)
    })
    return (

        <Flex zIndex={700} w={"100%"} boxShadow="sm" height={"80px"} align={"center"} justifyContent="space-evenly" bgColor={"#66b9bf"} position="sticky" top={0}  >
            <Box >
                <Link to={"/"}>
                    <Image src='https://www.masaischool.com/img/navbar/logo.svg' />
                </Link>
            </Box>
            <Flex display={["none", "none", "none", "flex"]} align={"center"} justifyContent="space-evenly" width={"70%"} fontSize={['10px', '14px', '16px', '16px']} color="teal.900" fontWeight={600}>
                <Box color={"white"}>
                    <Link to={"/lmslecture"}>
                        Lectures
                    </Link>
                </Box>

                <Box color={"white"}>
                    <Link to={"/lmsassignment"}>
                        Assignments
                    </Link>
                </Box>

                {inUserList && <Box color={"white"}>
                    <Link to={"/lms"}>
                        LMS
                    </Link>
                </Box>}

                <Box color={"white"}>

                    {isToken ?
                        <Menu >
                            <MenuButton
                                as={IconButton}
                                borderRadius={"50%"}
                                icon={
                                    <Box w={10} >
                                        <Image borderRadius={"50%"} src={kingImg} w={10} h={10} />
                                    </Box>
                                }

                                bg="variant"
                                fontSize={35}
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


            </Flex>
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
                            <DrawerHeader bg={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
                                <Box w={"50%"}>
                                    <Image borderRadius={"50%"} src={kingImg} />
                                </Box>
                                <Box>
                                    <Text color={"white"}>{kingName}</Text>
                                </Box>
                            </DrawerHeader>
                            <DrawerCloseButton color="white" />
                            <DrawerBody bgColor={"#66b9bf"} color="white" fontWeight={600} >


                                <Stack spacing={30}>
                                    <Box >
                                        <Link to={"/lmslecture"}>
                                            Assignments
                                        </Link>
                                    </Box>
                                    <Box >
                                        <Link to={"/lmsassignment"}>
                                            Lectures
                                        </Link>
                                    </Box>
                                    {inUserList && <Box  >
                                        <Link to={"/lms"}>
                                            LMS
                                        </Link>
                                    </Box>}

                                    <Box onClick={onClose} >

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

export default LmsNavbar

