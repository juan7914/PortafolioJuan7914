import React from "react";
import './App.css';
import About from "./Componets/About"
import Contac from "./Componets/Contac";
import Skill from "./Componets/Skill";
import Mywork from "./Componets/Mywork";
import Navbar from "./Componets/Navbar";
import { makeStyles } from "@material-ui/core";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Navbar/>
     <About title ="SobreMi" id = "About" dark={true}/>
     <Skill title = "Habilidades" id = "Skill" dark={false} /> 
     <Mywork title ="Proyectos" id = "Mywork" dark={true}/>   
     <Contac title ="Contactame" id = "Contac" dark={false}/>
    </div>
  )
}

const useStyles = makeStyles((theme)=> {
 
})

export default App;
