import { Switch, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure, Button } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { HamburgerIcon } from "@chakra-ui/icons"
import StateKing from '../../Components/StateKing/StateKing';


function StudentNavbar({ inUserList }) {
    let isToken = localStorage.getItem("token")
    let navigate = useNavigate()
    let [kingImg, setKingImg] = useState("")
    let [kingName, setKingName] = useState("")
    let x=JSON.parse(localStorage.getItem("switch"))
    let y=JSON.parse(localStorage.getItem("check"))

    let [show ,setShow]=useState(x)
    let [checked,setChecked]=useState(y)

    //=========for drawer=================================//
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    // =============handle Switch for toggle image=========//
   let handleSwitch=()=>{
    setShow(!show)
    localStorage.setItem("switch",JSON.stringify(!show))
    setChecked(!checked)
 localStorage.setItem("check",JSON.stringify(!checked))


      
   }

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
                    <Link to={"/courses"}>
                        COURSES
                    </Link>
                </Box>

                <Box color={"white"}>
                    <Link to={"/fees"}>
                        FEES & PAP
                    </Link>
                </Box>

                {inUserList && <Box color={"white"}>
                    <Link to={"/lmslecture"}>
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
                                     <Box w={show?"":10} >
                                      
                                     {  !show?  <Image borderRadius={"50%"} src={kingImg} w={10} h={10} />
                                         
                                       :<VscAccount />}
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

                <Box>
                   
                    <Switch colorScheme='red' isChecked={checked} onChange={handleSwitch}/>
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
                                    {!show?<Image borderRadius={"50%"} src={kingImg} />:
                                    <Link to={"/"}>
                                    <Image bgColor={"white"} src='https://www.masaischool.com/img/navbar/logo.svg' />
                                </Link>
                                    }
                                </Box>
                                <Box>
                                    {!show&&<Text color={"white"}>{kingName}</Text>}
                                </Box>
                            </DrawerHeader>
                            <DrawerCloseButton color="white" />
                            <DrawerBody bgColor={"#66b9bf"} color="white" fontWeight={600} >


                                <Stack spacing={30}>
                                    <Box >
                                        <Link to={"/courses"}>
                                            COURSES
                                        </Link>
                                    </Box>
                                    <Box >
                                        <Link to={"/fees"}>
                                            FEES & PAP
                                        </Link>
                                    </Box>
                                    {inUserList && <Box  >
                                        <Link to={"/lmslecture"}>
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
                                    <Box>
                                        
                    <Switch colorScheme='red' isChecked={checked} onChange={handleSwitch}/>
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

export default StudentNavbar
