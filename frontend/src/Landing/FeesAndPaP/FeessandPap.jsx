import { AspectRatio, Box, Center, Divider, flexbox, Spacer, Text } from '@chakra-ui/react'
import { BiRupee } from "react-icons/bi"
import { BsCalendarMinus } from "react-icons/bs"
import { BsLightningCharge } from "react-icons/bs"




import React from 'react'
import Footer from '../../Components/Footer/Footer'

function FeessandPap() {
  return (
    <Box margin={"auto"} display={"flex"} flexDir={"column"} gap={20}>
      {/*--------------- Top heading and description-----------------------*/}
      <Box p={10} w={{base:"100%",sm:"100%", md:"80%", lg:"80%"}} margin={"auto"}>
        <Text color={"#0A0103"} fontSize={{ base: 30, sm: 35, md: 40, lg: 45 }} fontWeight={700}>
          Pay After Placement
        </Text>
        <Text fontWeight={300} fontSize={{ base: 16, sm: 20, md: 25, lg: 28 }} >
          We believe that potential is evenly distributed across Indian society, but opportunity is not. Masai is democratising education with a unique Pay After Placement(PAP) Model. PAP allows you to study a course of your choice at ₹ 0 upfront fee.
        </Text>
      </Box>
      {/*--------------- ------------------Video Box-----------------------*/}
      <Box m={"auto"} w={{base:"95%",sm:"95%", md:"80%", lg:"80%"}}>
        <AspectRatio w={{base:"100%",sm:"100%", md:"70%", lg:"70%"}} ratio={2} m={"auto"} borderRadius={20}>
          <iframe
            title='naruto'
            src='https://www.youtube.com/embed/PPYwOjRmN2o'
            allowFullScreen
            style={{ borderRadius: 20 }}
          />
        </AspectRatio>
      </Box>

      {/*--------------------------------center Box-------------------------*/}

      <Box bgColor={"pink.50"} display={"flex"} pl={{ base: 5, sm: 25, md: 30, lg: 35, xl: 40 }} pr={{ base: 5, sm: 25, md: 30, lg: 35, xl: 40 }} alignItems={"center"}>
        <Box>
          <Text fontSize={{ base: 16, sm: 20, md: 25, lg: 25, xl: 30 }} fontWeight={700} >
            Pay After Placement (PAP) Agreement
          </Text>
        </Box>
        <Box height={{ base: "80px", sm: "100px", md: "120px", lg: "150px", xl: "200px" }} padding={2}>
          <Divider orientation='vertical' borderColor={"pink"} />
        </Box>
        <Box>
          <Text fontWeight={300} fontSize={{ base: 16, sm: 20, md: 25, lg: 28 }}>
            PAP Agreement is a legal contract that makes education at Masai outcome based.
            It is not an education loan, as you do not have to pay any interest & you do not require any collaterals.
            If you do not get placed within 1 year of studying, your learning with Masai is completely free.
          </Text>
        </Box>
      </Box>

      {/*--------------------------------last Box-------------------------*/}

      <Box display={"flex"} flexDir={"column"} gap={4} m={"auto"}  w={{base:"100%",sm:"100%",md:"80%",lg:"80%"}} p={5} bgColor={"white"} borderRadius={20}> 


        <Box  >
          <Text fontWeight={700} fontSize={30}>How it Works?</Text>
        </Box>

        <Box  textAlign={"left"}>
          <Text fontWeight={{ base: 600, sm: 700, md: 700, lg: 700, xl: 700 }} fontSize={20}>
            Pay After Placement(PAP) Agreement is a way for us to invest in your future and success.
            That means that we as an institution succeed only if you succeed in your career. Here is how:
          </Text>
        </Box>

        <Box   textAlign={"left"}>
          {/* -------------------------------- */}
          <Box display={"flex"} alignItems={"center"}   gap={3}>

            <Box bgColor={"pink"} color={"#ED0331"} fontSize={20} p={2} borderRadius={"50%"}>
              <BiRupee />
            </Box>
            <Box textAlign={"left"}>
              <Text fontWeight={700}>5LPA (CTC)</Text>
              <Text>You pay us only if you get a job of INR 5,00,000/- per year (CTC) or more, after course completion.</Text>
            </Box>
          </Box>
        </Box>
        {/* -------------------------------- */}

        <Box display={"flex"} alignItems={"center"} gap={3} >
          <Box bgColor={"pink"} fontSize={20} color={"#ED0331"} p={2} borderRadius={"50%"}>
            <BsCalendarMinus />
          </Box>
          <Box textAlign={"left"}>
            <Text fontWeight={700}>1 Year</Text>
            <Text>If you don’t get placed within 1 year after course completion, you pay nothing for learning at Masai.</Text>
          </Box>
        </Box>
        {/* -------------------------------- */}

        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Box bgColor={"pink"} fontSize={20} color={"#ED0331"} p={2} borderRadius={"50%"}>
            <BsLightningCharge />
          </Box>
          <Box textAlign={"left"}>
            <Text fontWeight={700}>Enforcement</Text>
            <Text>In the event you are not working or if your income drops below 5LPA or 10LPA(Only for L2 MasaiX. course), the PAP payments pause*</Text>
          </Box>
        </Box>


      </Box>
<Footer />
    </Box>
  )
}

export default FeessandPap