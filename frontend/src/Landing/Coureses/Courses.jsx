import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'

function Courses() {
  return (
   <Box>
    <Box  p={10}>
        <Text color={"#0A0103"}  fontSize={{base:30,sm:35,md:40,lg:45}} fontWeight={700}> 
        Our Courses
        </Text>
        <Text  fontWeight={300} fontSize={{base:16,sm:20,md:25,lg:28}} >
        Start your career on the right foot by getting skilled and become job-ready!
        </Text>
    </Box>
    <Box>
        <Grid gridTemplateColumns={{sm:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat(3,1fr)'}}>
          <Box>

          </Box>
          <Box>
            
          </Box>
          <Box>
            
          </Box>
        </Grid>
    </Box>
   </Box>
  )
}

export default Courses