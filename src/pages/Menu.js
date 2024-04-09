import React from 'react'
import Layout from './../components/Layout/Layout';
import { Menulist } from '../data/data';
import {CardMedia, CardActionArea, Card, Box, CardContent } from '@mui/material';
import { Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
          Menulist.map((menu) => (
        <Card sx={{maxWidth:"390px", display:"flex", m:2}}>
          <CardActionArea>
            <CardMedia
            sx={{minHeight:"400px"}}
            component={"img"}
            src={menu.image}
            alt={menu.name}
            />
            <CardContent>
              <Typography variant='h5' gutterBottom component={"div"} sx={{fontWeight:"bold"}}>
              {menu.name}
              </Typography>
              <Typography variant='body2'>
              {menu.description}
              </Typography>
              <Typography variant='p'component={"div"} sx={{color:"green",fontWeight:"bold",mt:1,fontSize:"15px"}}>
                Price:{menu.Price}&#8377;
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        )
  )}
      </Box>
    </Layout>
  )
}

export default Menu
