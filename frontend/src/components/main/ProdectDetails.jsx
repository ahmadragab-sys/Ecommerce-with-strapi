/* eslint-disable react/prop-types */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ClickedProduct}) => {
  
  const [selectedImg, setselectedImg] = useState(0);

  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{display: "flex"}}>
        <img width={300} src={ClickedProduct.productimg[selectedImg].url} alt="" />
      </Box>

      <Box sx={{py:2,textAlign: {xs: "center", sm: "left"}}}  >
        <Typography variant="h5">{ClickedProduct.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${ClickedProduct.productPrice}
        </Typography>
        <Typography variant="body1">
          {ClickedProduct.productDescripition}
        </Typography>

        <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>

        <ToggleButtonGroup
      value={selectedImg}
      exclusive
      
      aria-label="text alignment"
    >
          {ClickedProduct.productimg.map((item,index) => {
            return (
              <ToggleButton key={item.id} value={index} sx={{width:"110px",height:"110px",mx:1,p:"0",opacity:"0.5",}}>
              <img
              onClick={()=>{
                
                setselectedImg(index)
              }
              }
                style={{ borderRadius: 3 }}
                height={"100%"}
                width={"100%"}
                
                src={item.url}

                
                alt="imges"
              />
              </ToggleButton>
            );
          })}
          </ToggleButtonGroup>
        </Stack>

        <Button sx={{mb: {xs: 1, sm: 0} ,textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;