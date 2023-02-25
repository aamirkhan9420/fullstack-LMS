import { CalendarIcon, TimeIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Grid, Image, Text } from '@chakra-ui/react'
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import React from 'react'
import Footer from '../../Components/Footer/Footer'

function Courses() {
    let arr = [
        {
            url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/opt1_b53f83aefc.webp',
            elg: "GRADUATES &amp; 12TH PASS", type: "full time", req: "requires no coding experience",
            level: "Level 1 - Full Stack", course: "Web Development", date: "Course starts on 08 May 2023",
            weeks: "Launch your career in 35 weeks", rs: "Pay after placement of 5 LPA or above"
        },
        {
            url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/opt3_dca2a44837.webp',
            elg: "FINAL YEAR STUDENTS, WORKING PROFESSIONALS", type: "part time", req: "requires no coding experience",
            level: "Level 1 - Full Stack", course: "Web Development", date: "Course starts on 20 Mar 2023",
            weeks: "Launch your career in 30 weeks", rs: "Pay after placement of 5 LPA or above"
        },
        {
            url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/opt4_f8d111800e.webp',
            elg: "FINAL YEAR STUDENTS, WORKING PROFESSIONALS", type: "full time", req: "REQUIRES NO ANALYTICS EXPERIENCE",
            level: "Level 1 ", course: "Data Analytics", date: "Course starts on 29 May 2023",
            weeks: "Course starts on 29 May 2023", rs: "Pay after placement of 5 LPA or above"
        },
        {
            url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/opt4_f8d111800e.webp',
            elg: "WORKING PROFESSIONALS", type: "full time", req: "REQUIRES MINIMUM ONE YEAR OF TECH EXPERIENCE",
            level: "Level 2", course: "Backend Development", date: "Course starts on 08 May 2023",
            weeks: "Launch your career in 22 weeks", rs: "Pay after placement of 10 LPA or above"
        },
    ]
    return (
        <Box m={"auto"} >
            <Box p={10} >
                <Text color={"#0A0103"} fontSize={{ base: 30, sm: 35, md: 40, lg: 45 }} fontWeight={700}>
                    Our Courses
                </Text>
                <Text fontWeight={300} fontSize={{ base: 16, sm: 20, md: 25, lg: 28 }} >
                    Start your career on the right foot by getting skilled and become job-ready!
                </Text>
            </Box>
            <Box w={{ base: "100%", sm: "90%", md: "100%", lg: "100%" }} m={"auto"} p={{ base: 1, sm: 2, md: 3, lg: 5, xl: 10 }}>
              
                <Grid w={"fit-content"} m={"auto"} templateColumns={{ base: "repeat(1,1fr)", sm: 'repeat(1,1fr)', md: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }} gap={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }} >
                    {arr.map((el) => (

                        <Box  >
                            {/* --------- */}
                            <Box width={"100%"}>
                                <Image width={"100%"} src={el.url} />
                            </Box>
                            {/* --------- */}

                               <Box w={"100%"} display={"flex"} flexDir={"column"} borderBottomRadius={20} gap={2} p={3} justifyContent={"left"} boxShadow={"md"} bgColor={"white"} >

                                <Box display={"flex"} flexDir={"column"} gap={2} w={"fit-content"} >
                                    <Badge color={"#6E71CC"} width={"fit-content"} pl={2} pr={2} borderRadius={15} fontSize={{ base: 8, sm: 12, md: 12, lg: 13, xl: 13 }}>{el.elg}</Badge>
                                    <Badge bgColor={"#F6EDE7"} width={"fit-content"} color={"#cc926e"} pl={2} pr={2} borderRadius={15} fontSize={{ base: 8, sm: 12, md: 12, lg: 13, xl: 13 }}>{el.type}</Badge>
                                    <Badge pl={2} pr={2} borderRadius={15} fontSize={{ base: 8, sm: 12, md: 12, lg: 13, xl: 13 }} color={"#1A9FBD"}>{el.req}</Badge>
                                </Box>

                                {/* --------- */}
                                <Box display={"flex"} justifyContent={"space-evenly"} textAlign="left" flexDir={"column"} gap={2} pl={6} w={"fit-content"}>
                                    <Text fontSize={20} fontWeight={600}>{el.level}</Text>
                                    <Text fontSize={20} fontWeight={700}>{el.course}</Text>

                                </Box>
                                {/* --------- */}
                                <Box display={"flex"} justifyContent={"space-evenly"} flexDir={"column"} gap={2} w={"fit-content"}>
                                    <Box display={"flex"} gap={2} alignItems={"center"}>
                                        <CalendarIcon />
                                        <Text>{el.date}</Text>
                                    </Box>
                                    <Box display={"flex"} gap={2} alignItems={"center"}>
                                        <TimeIcon />
                                        <Text>{el.weeks}</Text>
                                    </Box>
                                    <Box display={"flex"} gap={2} alignItems={"center"}>
                                        <HiOutlineCurrencyRupee />
                                        <Text>{el.rs}</Text>
                                    </Box>

                                </Box>
                                {/* -------- */}
                                <Box w={"fit-content"}>
                                    <Button color={"white"} bgColor={"#ED0331"}>APPLY NOW</Button>
                                </Box>
                            </Box>
                        </Box>
                    ))}

                </Grid>
            </Box>
            <Footer />
        </Box>
    )
}

export default Courses