import React from 'react'
import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react"
function GridComp({ prop }) {
    console.log(prop)
    return (
        <Box w={"100%"} >
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(1, 1fr)' }} gap={6}>
                {prop.length > 0 && prop.map((el, index) => (
                    <Flex key={index} border={"1px solid red"} p={5} w="100%" display={"flex"} flexDir={{ sm: "column", md: "row", lg: "row" }} justifyContent="space-between" alignItems={"center"} textAlign="left">
                        <Box display={"flex"} flexDir={{ sm: "row", md: "column", lg: "column" }}>
                            <Box>
                                <Text color={"#4F46EF"} fontWeight={500} fontSize={"1.2rem"}>
                                    {el.topic_name} ({el.lecture_date})  <Badge variant='solid' colorScheme='green'>
                                        {el.lecture_type}
                                    </Badge>
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight={"300"}>
                                    <span style={{ fontWeight: "600" }}>{el.teacher_name}</span>  sheduled <span style={{ fontWeight: "600" }}>{el.topic_name}</span> at {el.lecture_date}-{el.lecture_time}
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Badge variant='solid' colorScheme='red' fontSize='0.8em' p={1}>
                                Absent
                            </Badge>
                        </Box>

                    </Flex>
                ))}
            </Grid>
        </Box>
    )
}

export default GridComp