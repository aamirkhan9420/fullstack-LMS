import { Box, Image,Icon, Text, Grid} from '@chakra-ui/react'
import React from 'react'
import {SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialYoutube} from 'react-icons/sl'
import {TiSocialYoutube} from 'react-icons/ti'



function Footer() {
  return (
    <Box  w={"100%"} bgColor={"black"}>
     <Box margin={"auto"} width={"80%"}>
        {/* --------Fist box------- */}
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} pt={10} pb={10} >
           <Box><Image src='https://masaischool.com/courses/images/masai-logo-dark.svg' /></Box>
           <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }} justifyContent={"space-between"} alignItems={"center"} gap={{ base:4 , sm: 6, md: 8, lg:10, xl:10 }} fontSize={25} >
           <Box><Text color={"gray"}>Follow us-</Text></Box>
           <Box><Icon color={"gray"}  as={SlSocialTwitter }/></Box>
           <Box><Icon color={"gray"} as={SlSocialInstagram }/></Box>
           <Box><Icon color={"gray"} as={SlSocialLinkedin }/></Box>
           <Box ><Icon color={"gray"} as={TiSocialYoutube}/></Box>
           <Box><Icon  color={"gray"} as={SlSocialFacebook }/></Box>
           <Box><Icon color={"gray"}  as={SlSocialGithub }/></Box>         
           </Box>
        </Box>
        {/* -------second box------ */}
        <Grid borderTop={"3px solid gray"} color="gray" gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }} gap={5} fontSize={20} p={10}>

           <Box><Text>Masai Alumni</Text></Box>
           <Box><Text>Our Team</Text></Box>
           <Box><Text>Careers</Text></Box>
           <Box><Text>Refferal Program</Text></Box>
           <Box><Text>Masai Learn</Text></Box>
           <Box><Text>Industry Mentors</Text></Box>
           <Box><Text>Hire From Us</Text></Box>
           <Box><Text>Our Investors</Text></Box>
           <Box><Text>Testimonial</Text></Box>
           <Box><Text>Blog</Text></Box>
           <Box><Text>ScholarShip</Text></Box>
           <Box><Text>Become Coach</Text></Box>
           <Box><Text>About us</Text></Box>
           <Box><Text>FAQ</Text></Box>
           <Box><Text>Newsroom</Text></Box>
           <Box><Text>Contact Us </Text></Box>
           <Box><Text>Programe'd by Masai </Text></Box>


          


        </Grid>
        {/* ---------------for base and small screen --------- */}
        <Box display={{ base: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }} justifyContent={"space-between"} alignItems={"center"} gap={{ base:2 , sm: 4}} fontSize={{ base:20 , sm: 22}} >
           <Box><Text color={"gray"}>Follow us-</Text></Box>
           <Box><Icon color={"gray"}  as={SlSocialTwitter }/></Box>
           <Box><Icon color={"gray"} as={SlSocialInstagram }/></Box>
           <Box><Icon color={"gray"} as={SlSocialLinkedin }/></Box>
           <Box ><Icon color={"gray"} as={TiSocialYoutube}/></Box>
           <Box><Icon  color={"gray"} as={SlSocialFacebook }/></Box>
           <Box><Icon color={"gray"}  as={SlSocialGithub }/></Box>         
           </Box>

     </Box>
    </Box>
  )
}

export default Footer