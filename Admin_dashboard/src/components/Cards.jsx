import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { flexCenter, flexStart } from "../styles/custom.style";

const Cards = ({ item }) => {
  return (
    <Card sx={{width:'100%', p: 2,...flexStart,backgroundColor:'primary.bg' }} >
      <CardContent sx={{...flexCenter,}}>
        {item.icon}
      </CardContent>
      <CardContent sx={{...flexStart,flexDirection:'column'}}>
        <Typography variant="h5" sx={{color:'text.primary', fontWeight:'bold'}}>{item?.label}</Typography>
        <Typography sx={{m:'auto',mt:1,textAlign:'center',fontWeight:'bold'}}>{item?.data}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
