import { useTheme } from "@emotion/react";
import { Box, CircularProgress, Container, Dialog, IconButton, Rating, Stack, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from "@mui/icons-material";
import ProdectDetails from "./ProdectDetails";
import { useGetproductByNameQuery } from "../../redux/Product";
import { motion } from "framer-motion";



const Main = () => {
  

    const handleAlignment = (event, newValue) => {
      if (newValue !== null) {
      setmyData(newValue)
      }
    };
    const theme = useTheme()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
const allProductApi = "products?populate=*"
const womanProductApi = "products?populate=*&filters[productCategory][$eq]=woman"
const menProductApi = "products?populate=*&filters[productCategory][$eq]=men"    
    // @ts-ignore
    const [myData, setmyData] = useState(allProductApi);
    const { data, error, isLoading } = useGetproductByNameQuery(myData)
    const [ClickedProduct, setClickedProduct] = useState({});
    if(error ){
      return(

    <Container sx={{py:11,textAlign:"center"}}>
       <Typography variant="h6">{error.
// @ts-ignore
       error}</Typography> 
       <Typography variant="h6">Please try again later</Typography> 
    </Container>
   )
    }

    if(isLoading ){
      return(
        <Box sx={{ py:11,textAlign:"center" }}>
        <CircularProgress />
      </Box>
      )
    }

    if(data){
 return (
        <Container sx={{py :9}}>
            <Stack direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={3}>
             <Box>
             <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
             </Box>
             <ToggleButtonGroup
             color="error"
      value={myData}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        ".Mui-selected": {
          border: "1px solid rgba(233, 69, 96, 0.5) !important",
          color: "#e94560",
          backgroundColor: "initial",
        },
      }}
    >
      <ToggleButton sx={{color:theme.palette.text.primary}} className="myButton" value={allProductApi} aria-label="left aligned">
        All Prodects
      </ToggleButton>
      <ToggleButton sx={{mx:"16px !important",color:theme.palette.text.primary}} className="myButton" value={menProductApi} aria-label="centered">
        MEN category
      </ToggleButton>
      <ToggleButton sx={{color:theme.palette.text.primary}} className="myButton" value={womanProductApi} aria-label="right aligned">
        WOMAN category
      </ToggleButton>
    </ToggleButtonGroup>
            </Stack>
            <Stack direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}>
                {data.data.map((item)=>{
                    return( 
                        <Card component={motion.section}
                        layout
                        initial={{transform:"scale(0)"}}
                        animate={{transform:"scale(1)"}}
                        transition={{duration:0.6}}
                        key={item.id} sx={{ maxWidth: 333,mt:6 ,":hover .MuiCardMedia-root": {scale:"1.1", transition:"0.35s",rotate:"1deg"} }}>
                        <CardMedia
                          sx={{ height: 277}}
                          // @ts-ignore
                          image={`${item.productimg[0].url}`}
                          title="green iguana"
                        />
                        <CardContent>
                        <Stack
                                      direction={"row"}
                                      justifyContent={"space-between"}
                                      alignItems={"center"}
                                    >
                                      <Typography gutterBottom variant="h6" component="div">
                                        {item.productTitle}
                                      </Typography>
                  
                                      <Typography variant="subtitle1" component="p">
                                      {item.productPrice}
                                      </Typography>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                     {item.productDescripition
                                     }
                                    </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent:"space-between"}}>
                      
                          <Button onClick={()=>{
                            handleClickOpen()
                            setClickedProduct(item)
                            console.log(item)
                           
                          }


                          } sx={{textTransform:"capitalize"}} size="large">
                          < AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize="small" />
                              Add to cart</Button>
                              <Rating precision={0.1} name="read-only" value={item.productRating} readOnly />
                        </CardActions>
                              </Card>

                    )
                })}
    
            </Stack>
            <Dialog
            sx={{".MuiPaper-root":{minWidth: {xs:"100%",md:800}}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton sx={{":hover":{color: "red",rotate:"180deg",transition:"0.3s"},position:"absolute",top:0,right: 10}} onClick={handleClose}>
                    <Close />
                </IconButton>
       <ProdectDetails ClickedProduct={ClickedProduct}/>
       
      </Dialog>


        </Container>
    );
}

    }
   

export default Main;
