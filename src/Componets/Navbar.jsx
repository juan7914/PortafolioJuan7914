import React from 'react'
import {useState} from "react";
import{Link, animateScroll}from "react-scroll"; 
import { Toolbar, IconButton, AppBar, List,  Drawer, Divider, ListItem, ListItemIcon,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import logo from "../images/logo.jpg"



const Navbar = () => {
  const classes = useStyles();
  const [open , setOpen] = useState(false);
  const link = [
{id: "About", text: "SobreMi", icon: <PermIdentityIcon  fontsize = "large" />},

{id: "Skill", text:"Habilidades", icon: <EmojiObjectsIcon fontsize = "large" className={classes.light}/> },

{id: "Mywork", text:"Trabajos", icon: <WorkIcon fontsize = "large"/>},

{id: "Contac", text:"Contacto", icon: <ContactMailIcon fontsize = "large"/>},

];

const scroll = ()=>{
  animateScroll.scrollToTop();
}

  return (
    <> 
    <div >
      <AppBar position= "fixed" className={classes.root}>      
        <Toolbar className={classes.toolbar}>      
            <img 
            src={logo}
             className={classes.logo}
              alt="logo"
              onClick={scroll} />
            <List  className={classes.list}>
                {
                    link.map(({id,text}, index)=> (
                        <Link
                        key = {index}
                        to = {id}
                        spy={true}
                        activeClass="active"
                        smoot={true}
                        duration={1000}
                        offset={-70}
                        >
                        {text}
                        </Link>
                    ))
                }
            </List>
            <IconButton  className={classes.menubutton} edge="end" aria-label="menu" 
            onClick={()=>setOpen(!open)}
            >
                <MenuIcon fontSize='large'/>           
          </IconButton>        
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>
        <IconButton className={classes.menubutton} onClick={()=> setOpen(false)} >
                <CancelIcon  fontSize = "large"/>
        </IconButton>
        <Divider/>
        {

        link.map(({id , text , icon}, index) => (
            <Link 
            key={index}
            className={classes.sidebar}
            to ={id}
            spy={true}
            activeClass="active"
            smoot={true}
            duration={1000}
            offset={-70}
            >
            <ListItem component="h5">
                <span>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                </span>{text}
            </ListItem>
            </Link>
        ))
        
        }
      </Drawer>

    </div>
  );
    </>
  )
}

const useStyles = makeStyles((theme)=> ({  
  root:{   
    left:0,
    top:0,
    right:0,
    zIndex:999
  }, 
  toolbar:{    
    display:"flex",
    justifyContent:"flex-end",
    alignItems: "center"
  },  
  list:{
    [theme.breakpoints.down("sm")]:{
      display: "none"
    },
    "& a":{
    color:"#fafafa",
    margin:"1.5rem"
    },
    "& a:hover":{
      cursor: "pointer",
      color: "tomato",
      borderBottom: "3px solid tomato" 
    }
  },
  logo:{
    height:"2.5rem",
    objectFit:"contain",
    "&:hover":{
      cursor:"pointer"
    }
  },
  light:{
    color: "#ffcc00",
  },
  menubutton:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display:"block",
      color:"tomato",
      position: "adsolute",
      
    },       
    sidebar:{
      width: "40vw",
      [theme.breakpoints.down("sm")]:{
        width: "60vw",
      },
      "& h5": {     
        margin: theme.spacing(10, 0 , 0 , 4),   
        fontSize:"1.4rem",
        color: "#333",
        fontWeight:"bold",        
      },
      "& h5:hover": {
        color: "tomato",
        cursor: "pointer",        
        borderBottom: "3px solid tomato" 
      }

    }
  }
}))
export default Navbar