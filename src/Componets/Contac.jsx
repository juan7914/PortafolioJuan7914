import React from 'react'
import { useState } from 'react';
import {makeStyles, Typography, Paper, Radio, TextField, Button} from "@material-ui/core"

const Contac = ({title, id, dark}) => {
  const classes= useStyles();
  const [value, setValue] = useState("say Hi");
  const handleChange = (e)=>{
    setValue(e.target.value);
  };
  return (
    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>
     <div className={classes.sectioncontend} id = {id}>
        <Typography variant= "h3">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titleandchoice}>
            <Typography variant= "h5">Comunicame</Typography>
            <div className={classes.choices}>
              <span>Saludame</span>
              <Radio 
               value="say Hi"
              checked={value === "say Hi"}
              color="secondary"
              onChange={handleChange}
              />
              <span>Cotiza</span>
              <Radio 
               value="Get a Quote"
              checked={value === "Get a Quote"}
              color="secondary"
              onChange={handleChange}
              />
            </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Tu Nombre"/>
            <br/>
            <TextField label="Tu Correo"/>
            <br/>
            {
              value === "Get a Quote"? (
                <>
                <TextField label="Nesecitas un servicio"/>
                <br/>
                <TextField label="Presupuesto estimado"/>
                </>

              ):null
            }
             <br/>
            <TextField label="Escribe tu mensaje"/>
            <br/>
          </form>
          <Button variant='contained'>Submit</Button>
        </Paper>   
      </div>
      </div>
  )
}

const useStyles = makeStyles((theme)=> ({
  section :{
    minHeight: "100vh",    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",    
  },
  sectiondark:{
    background:"#222",
    color:"#fff"
  },
  sectioncontend:{
    maxWidth: "100vw", 
    padding: "20px " , 
    color: "#080808",   
  },

    root:{
      marginTop:theme.spacing(4),
      background:"#5f43ff",
      color: "#fff",
      padding:"30px",
      fontSize:"1.5rem",
      maxWidth:"500px",
      display: "flex",
      flexDirection:'column',
      justifyContent:"space-between",
      padding: theme.spacing(4),
      "& Button":{
        background: "#fff",
        color: "#5255f6",
        fontWeight:900,
        fontSize:"1.2rem",
        marginTop: theme.spacing(4),
        cursor: "pointer",
      },
      "& Button:hover":{
        background: "tomato",
        color: "#fff",
      }

    },

    titleandchoice:{
     "& h5":{
       marginTop: theme.spacing(1),
     }
    },

    form:{
     display:"flex",
     flexDirection: "column",
     "& input":{
      marginBottom: theme.spacing(1),      
     }
     
    },
  
}))

export default Contac