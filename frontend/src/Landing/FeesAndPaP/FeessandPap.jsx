import { AspectRatio, Box, Center, Divider, flexbox, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function FeessandPap() {
  return (
    <Box margin={"auto"} display={"flex"} flexDir={"column"} gap={20}>
      {/*--------------- Top heading and description-----------------------*/}
      <Box p={10} w={"80%"} margin={"auto"}>
        <Text color={"#0A0103"} fontSize={{ base: 30, sm: 35, md: 40, lg: 45 }} fontWeight={700}>
          Pay After Placement
        </Text>
        <Text fontWeight={300} fontSize={{ base: 16, sm: 20, md: 25, lg: 28 }} >
          We believe that potential is evenly distributed across Indian society, but opportunity is not. Masai is democratising education with a unique Pay After Placement(PAP) Model. PAP allows you to study a course of your choice at ₹ 0 upfront fee.
        </Text>
      </Box>
      {/*--------------- ------------------Video Box-----------------------*/}
      <Box m={"auto"} w={"80%"}>
        <AspectRatio w="70%" ratio={2} m={"auto"} borderRadius={20}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/PPYwOjRmN2o'
            allowFullScreen
            style={{ borderRadius: 20 }}
          />
        </AspectRatio>
      </Box>

      {/*--------------------------------center Box-------------------------*/}

      <Box bgColor={"#FFFAFB"} display={"flex"} pl={{ base: 5, sm: 25, md: 30, lg: 35, xl: 40 }} pr={{ base: 5, sm: 25, md: 30, lg: 35, xl: 40 }} alignItems={"center"}>
        <Box>
          <Text fontSize={{ base: 16, sm: 20, md: 25, lg: 25, xl: 30 }} fontWeight={{ base: 400, sm: 500, md: 600, lg: 700, xl: 700 }} >
            Pay After Placement (PAP) Agreement
          </Text>
        </Box>
        <Box height={{ base: "80px", sm: "100px", md: "120px", lg: "150px", xl: "200px" }} padding={2}>
          <Divider orientation='vertical' borderColor={"pink"} />
        </Box>
        <Box>
          <Text fontSize={{ base: 12, sm: 14, md: 16, lg: 18, xl: 20 }}>
            PAP Agreement is a legal contract that makes education at Masai outcome based.
            It is not an education loan, as you do not have to pay any interest & you do not require any collaterals.
            If you do not get placed within 1 year of studying, your learning with Masai is completely free.
          </Text>
        </Box>
      </Box>

      {/*--------------------------------last Box-------------------------*/}

      <Box>
        <Box>
          <Text fontWeight={700} fontSize={40}>1</Text>
        </Box>
        <Box>

        </Box>
      </Box>

    </Box>
  )
}

export default FeessandPap