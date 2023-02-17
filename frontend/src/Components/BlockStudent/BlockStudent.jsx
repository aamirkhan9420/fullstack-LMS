

import { Box, Button, Grid, Image, Text, useToast } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function BlockStudent() {
    let [student, setStudent] = useState([])
    let [count,setCount]=useState(0)
    let toast=useToast()
    let isToken=localStorage.getItem("token")
    let navigate=useNavigate()
    let getBlockStudentList = () => {
        fetch("https://lms-iliv.onrender.com/adminwork/getBlockedStudents", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res.msg)
                setStudent(res.msg)

            }).catch((e) => console.log(e))
    }

let RemoveBlockedStudent=(id)=>{
    fetch(`https://lms-iliv.onrender.com/adminwork/removeBlockStudent/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then((res) => res.json())
        .then((res) => {
            console.log(res.msg)
            toast({
                description:res.msg,
                status:"success",
                isClosable:true,
                duration:9000,
                position:"top"
            })
            setCount(count+1)
        }).catch((e) => console.log(e))
}
    useEffect(() => {  
         if(!isToken){
         navigate("/login")
         return
    }
        getBlockStudentList()
    }, [count])
 
    return (
        <Box>
            <Box m="auto" p={5}>

                <Grid templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6} >
                    {student.length > 0 && student.map((el, index) => (
                        <Box border={"1px solid gray"} key={index} boxShadow={"md"} borderRadius={10}>
                            <Box h={"50%"} m="auto" w={"100%"}>
                                <Image borderRadius={10} h={"100%"} w={"100%"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXCTlMvfcUMsJ4r4seTYMY8_k8V31eV3LKUxkdR34n0BurNYuarum86BROpRlbhoQlxU&usqp=CAU' />
                            </Box>
                            <Box display={"flex"} h={"30%"} flexDir="column" justifyContent={"space-between"} >
                                <Text>{`name: ${el.name}`}</Text>
                                <Text>{`Student-ID: ${el.student_id}`}</Text>
                                <Text>{`Email-ID: ${el.email}`}</Text>
                            </Box>
                            <Box p={2} display={"flex"} justifyContent={"space-evenly"} alignItems={"start"}><Button onClick={()=>RemoveBlockedStudent(el._id)}>Remove</Button></Box>
                        </Box>
                    ))}

                </Grid>
            </Box>
        </Box>
    )
}

export default BlockStudent