import { Box, Container, Drawer, IconButton, ListItemButton, ListItemIcon, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from "@mui/icons-material/Menu";
import {  Close, ElectricBikeOutlined, LaptopChromebookOutlined, MenuBookOutlined, SportsEsportsOutlined } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Links from "./Links";


const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const theme = useTheme()
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    return (
        <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mt:5}}>
           <Box>
      <Button
      
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // @ts-ignore
        sx={{width:222,bgcolor:theme.palette.myColor.main,color:theme.palette.text.secondary}}
      >
        <WindowIcon/> 
        <Typography   sx={{
                padding:"0",
                textTransform:"capitalize",
                mx:1,
            }}
            >
        Categories 
        </Typography>
      <Box flexGrow={1}/>  
    <KeyboardArrowRightIcon/>
          </Button>
          
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
      >
        
        <MenuItem onClick={handleClose}>
        
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
      </Menu>
    </Box>
    {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
    
    <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper ":{height:"100%"}}}
          >
            
            <Box  sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}>
                <IconButton sx={{":hover":{color: "red",rotate:"180deg",transition:"0.3s"},position:"absolute",top:0,right: 10}} onClick={toggleDrawer("top", false)}>
                    <Close />
                </IconButton>
{[{mainLink:"Home",subLink:["Link1,Link2,Link3"]},
{mainLink:"Maga menu",subLink:["Link1,Link2,Link3"]},
{mainLink:"Full screen menu",subLink:["Link1,Link2,Link3"]},
{mainLink:"Pages",subLink:["Link1,Link2,Link3"]},
{mainLink:"User account",subLink:["Link1,Link2,Link3"]},
{mainLink:"Vender account",subLink:["Link1,Link2,Link3"]}
].map((item) => 
    { return(
        <Accordion key={item.mainLink} elevation={0} sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <Typography>
            {item.mainLink}
            </Typography>
          
        </AccordionSummary>
        <List sx={{py:0,my:0}}>
      {item.subLink.map((link) =>{
       return(
        <ListItem  key={link} sx={{py:0,my:0}}>
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>



       )

      })}
         
        </List>
      </Accordion> 
    )

     })}
               
            </Box>
          </Drawer>
        </Container>
    );
}

export default Header3;
