import { Box, Spinner } from '@chakra-ui/react'
import React, { lazy, Suspense, useEffect, useState } from 'react'

import LmsNavbar from './LmsNavbar'
let GridComp = lazy(() => wait(1000).then(() => import('../GridComp/GridComp')))

function LmsLecture() {
    let [lecture, setLecture] = useState([])

    let fetchLectures = () => {
        fetch("https://lms-iliv.onrender.com/adminwork/getLectures", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }

        }).then((res) => res.json()).then((res) => {

            console.log(res.msg)
            setLecture(res.msg)
        }).catch((er) => console.log(er))
    }
    useEffect(() => {
        fetchLectures()
    }, [])

    return (
        <Box>
            <LmsNavbar />
            <Box mt={10}>
                <Suspense fallback={<Box m={"auto"} mt={"40vh"}><Spinner /></Box>}>
                    <GridComp prop={lecture} />
                </Suspense>
            </Box>

        </Box>
    )
}

export default LmsLecture

let wait = (t) => {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, t);
    })
}