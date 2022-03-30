import React from 'react';
import {makeStyles, Typography, Card, CardMedia, CardContent, CardActions, Button, List, Toolbar } from "@material-ui/core";
import{Link}from "react-scroll";
import Portafolio from "../images/Portafolio.jpeg"
import TypeWriterEffect from 'react-typewriter-effect';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CV from "../images/CV.pdf"

const About = ({title, id , dark}) => {
  const classes = useStyles();
   const Redes = [  
     {id: 1, icon1: <LinkedInIcon  fontsize = "large" />, link: 'https://www.linkedin.com/in/juanmurillop/'},
     {id: 2, icon2: <GitHubIcon  fontsize = "large"  />, link1:'https://github.com/juan7914'},  
]
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <h1>About</h1>
      <div className={classes.sectioncontend} id = {id}>
        <Typography variant= "h3">{title}</Typography>
        <Toolbar className={classes.tolbar1}>
          <List className={classes.list1}>   
             {
              Redes.map(({id , icon1,icon2, link, link1}) => (
                  <Link 
                     key={id}
                      className={classes.list1}
                      to ={id}
                      spy={true}
                      activeClass="active"
                      smoot={true}
                      duration={1000}
                      offset={-70}
                    >
                    <Link href={link} color="primary" target="_blank" rel= "noopener noreferrer">
                      {icon1}
                    </Link>
                    <Link href={link1} color="primary" target="_blank" rel= "noopener noreferrer">
                      {icon2}
                    </Link>                    
                </Link>))  
              }        
            </List> 
      </Toolbar>     
        <Card className ={classes.Card}>
          <CardMedia  image= {Portafolio} className ={classes.media} title="picture"/>
          <CardContent className ={classes.CardContent}>
            <TypeWriterEffect            
            text="HOLA BIENVENIDO(A) A MI PORTAFOLIO  SOY JUAN CARLOS MURILLO"
            textStyle={{fontSize: "2rem", fontWeight: "770px", color:"Tomato"}}
            startDelay={100}
            cursorColor= "black"
            typeSpeed = {100}
            />
            <TypeWriterEffect             
            text="Desarrollador Full Stack Developer"
            textStyle={{fontSize: "1.2rem", fontWeight: "500px", TextDecoder:"line"}}
            startDelay={5500}
            cursorColor= "black"
            typeSpeed = {100}
            />           
            <Typography variant='h6' color="#0330f8">
            "Manejo de tecnologias Javascript, Html5, Css3,  React.js, Redux,  Node.js, Express.js, Sequelize, postgressSQL, Git-Hub, Git, y todo el deseo de aprender y mejorar constantemente."
            </Typography>            
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
              <a href={CV} download>Descarga CV</a>
              </Button>
          </CardActions>
        </Card>
      </div>
      
    </div>
  )
}

const useStyles = makeStyles((theme)=> ({
  section :{
    minHeight: "100vh"
    
  },
  sectiondark:{
    background:"#222",
    color:"#fff"
  },
  sectioncontend:{
    maxWidth: "80vw",
    margin: "0 auto" 
  },
  Card :{
    height: "60vh",
    display:"flex",
    marginTop: theme.spacing(1),
    position: "relativa",

  },
  media:{
    width:"300px",
    height:"auto",
    objectFit:"cover",
    borderRadius:"10px",
    margin: theme.spacing(4),
  },
  CardContent:{
    [theme.breakpoints.down("sm")]:{
     "& TypeWriterEffect":{
       fontSize: "0.5rem"
     }
    },
    marginTop: theme.spacing(2),
    "& h6":{
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]:{
        display:"none",
      }
    }
  },
  pdfbutton:{
    position: "absolute",
    bottom:"2rem",
    right: "7.8rem",
    background: "tomato",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]:{
      buttom:"7rem",
      right: "2.4rem",
      padding: theme.spacing(1),
    },
    "&:hover":{
      background:"#4441ff",
    },
    "& a":{
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover":{
      color:"tomato"
    },    
  },
  list1:{    
    justifyContent:"flex-end",
    alignItems: "end",
    "& a":{
    color:"#fafafa",
    margin:"1px",    
    },
    "& a:hover":{
      cursor: "pointer",
      color: "#4441ff",            
    }
  },
  tolbar1:{
    display:"flex",
    justifyContent:"flex-end",
    alignItems: "center"
  },
 
}))

export default About
