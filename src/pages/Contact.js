import React from "react";
import Layout from "./../components/Layout/Layout";
import MailIcon from "@mui/icons-material/Mail";
import  CallIcon  from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

import {


  Box,
  Paper,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 2,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact Our Resturant</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore sint
          explicabo deleniti labore quaerat necessitatibus illo cum blanditiis
          officia corporis sunt facilis accusantium, commodi architecto. Cum,
          minima fugit. Totam dicta mollitia voluptatum maxime dolor pariatur ex
          voluptatibus beatae, asperiores, excepturi quidem eos esse aut!
          Possimus modi dolorem, odit praesentium nostrum amet expedita labore
          officia pariatur excepturi, quaerat consequatur obcaecati
          necessitatibus facilis voluptate repellendus recusandae, doloribus
          deserunt harum aspernatur tempore eaque. Voluptatem eaque accusantium
          quod, architecto accusamus aliquam sunt ab id voluptate numquam
          nesciunt esse iusto, aliquid aperiam vero rerum doloremque, autem quae
          obcaecati debitis blanditiis! Dicta amet corrupti temporibus deleniti.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": { width: "300px" },
        }}
      >
        <TableContainer component={Paper}>
          <Table area-lable="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black",color:"white"}} align="center"> Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> <SupportAgentIcon sx={{color:'red',pt:1}}/> 1800-000-000(toll free)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> <MailIcon sx={{color:'skyblue',pt:1}}/>help@restro.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> <CallIcon sx={{color:'skyblue',pt:1}}/>9050860405</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
