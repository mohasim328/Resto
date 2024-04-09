import { Facebook, GitHub, Instagram , YouTube } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{textAlign:'center',bgcolor:'#1A1A1A', color:'white' ,p:3}}
    >
    <Box
    sx={{my:3,
       "& svg":{
        mr:2,
        cursor:"pointer",
        fontSize:"30px",
        


       }
    }}
    >
      <Instagram/>
      <Facebook/>
      <YouTube/>
      <GitHub/>

    </Box>
      <Typography variant='p' sx={{}}>
      All Right Reserve &copy; Restro
      </Typography>
    </Box>
  )
}

export default Footer
