import React from 'react'
import { Badge, Box, Button, Flex, Grid, Spinner, Text } from "@chakra-ui/react"
function GridComp({ prop, handleDelete, handleModal }) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))

    console.log(prop)
    return (
        <Box w={"80%"} margin={"auto"} >
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }} gap={6}>
                {prop.length > 0 && prop.map((el, index) => (
                    <Flex key={index} p={5} w="100%" bgColor={"#66b9bf"} flexDir={{ base: "column", sm: "row", md: "column", lg: "row" }} justifyContent="space-between" alignItems={"center"} textAlign="left">
                        <Box display={"flex"} flexDir={{ base: "column", sm: "column", md: "column", lg: "column" }} >
                            <Box>
                                <Text color={"#4F46EF"} fontWeight={500} fontSize={"1.2rem"}>
                                    {el.topic_name} ({el.lecture_date})  <Badge variant='solid' colorScheme={el.lecture_type == "LIVE" ? "green" : "blue"}>
                                        {el.lecture_type}
                                    </Badge>
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight={"300"} color={"white"}>
                                    <span style={{ fontWeight: "600" }}>{el.teacher_name}</span>  sheduled <span style={{ fontWeight: "600" }}>{el.topic_name}</span> at {el.lecture_date}-{el.lecture_time}
                                </Text>
                            </Box>
                        </Box>
                        {el.userId === currentUser.userId ? <Box display={"flex"} gap={2} flexDir={{ sm: "row", md: "row", lg: "row" }}>


                            <Button onClick={() => handleModal(el)} bg={"green"} color={"white"} >Edit</Button>

                            <Button onClick={() => handleDelete(el._id)} bgColor={"red"} color={"white"} p={2}>Delete</Button>

                        </Box> : ""}

                    </Flex>
                ))}
            </Grid>

        </Box>
    )
}

export default React.memo(GridComp)