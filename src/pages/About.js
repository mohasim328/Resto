import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
      sx={{
        my:12,
        textAlign:'center',
        p:3,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
        },
        "& p":{
          textAlign:"justify",

        },
      }}
      >
        <Typography variant="h4">Welcome To Our Restrant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident id
          autem sit quaerat blanditiis error odio cumque nemo deserunt beatae
          iure molestiae, impedit excepturi sapiente dolore quas laborum alias
          ut?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nam quasi, magnam id illum sed sit ipsa ullam. Corporis mollitia excepturi totam atque delectus! Illum tenetur illo enim numquam molestias?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident id
          autem sit quaerat blanditiis error odio cumque nemo deserunt beatae
          iure molestiae, impedit excepturi sapiente dolore quas laborum alias
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum facilis qui vel quis neque eveniet, eum itaque enim voluptatum odio accusantium dolores vitae laborum maxime quaerat nostrum earum magnam quibusdam!
          ut?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
