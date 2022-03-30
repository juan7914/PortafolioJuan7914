import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"
import Tecnologies from './Tecnologies';

const Skill = ({title, id , dark}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontend} id = {id}>
        <Typography variant= "h3">{title}</Typography>
        <Tecnologies/>        
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
  }
}))

export default Skill