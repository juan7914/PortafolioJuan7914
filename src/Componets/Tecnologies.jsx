import React from 'react'
import Html from "../images/HTML.jpg";
import CSS from "../images/CSS-Logo.png";
import Express from "../images/express.png";
import Git  from "../images/git.png";
import Javascript from "../images/js.png";
import R from "../images/React.png";
import Node from "../images/Node.jpg";
import Redux from "../images/redux.jpg";
import Sequelize from "../images/Sequelize.png";
import Postgress from "../images/PostgressSql.png";
import {Timeline, TimelineOppositeContent, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from "@material-ui/lab";
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import StartRating from "./StartRating";



const Tecnologies = () => {
    const clases = useStyles();
    const Skill= [
        {
            years: "2019",
            src: Html,
            title: "Html 5",
            start: 5
        },
        {
            years: "2019",
            src: CSS,
            title: "CSS 3",
            start: 5
        },       

        {
            years: "2019",
            src: Javascript,
            title: "Javascript ES6",
            start: 5
        },
        {
            years: "2020",
            src: Git,
            title: "Git",
            start: 5
        },      
        {
            years: "2021",
            src: R,
            title: "React.js",
            start: 4
        },
        {
            years: "2021",
            src: Node,
            title: "Node.js",
            start: 4
        },
        {
            years: "2021",
            src: Express,
            title: "Express.js",
            start: 4
        },
        {
            years: "2021",
            src: Redux,
            title: " React-Redux",
            start: 4
        },
        {
            years: "2021",
            src: Sequelize,
            title: "Sequelize",
            start: 4
        },
        {
            years: "2021",
            src: Postgress,
            title: "Postgress",
            start: 4
        },
        
       
    ]
  return (
    <Timeline aling="left">
        {
            Skill.map(({years,src,title,start}, index)=>(
            <TimelineItem key={index}>
                <TimelineOppositeContent>
                    <Typography variant="h6" color= "textSecondary">
                        {years}                        
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                    <img src={src} alt={title} className={clases.customlogo}/>
                    </TimelineDot>
                    <TimelineConnector/>                    
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={7} className={clases.paper}>
                        <Typography variant='h6' component="h1">
                        {title}
                        </Typography> 
                        <StartRating start={start}/>                      
                    </Paper>

                </TimelineContent>
            </TimelineItem>))              
            
        }        
    </Timeline>
  )
}

const useStyles = makeStyles((theme)=> ({
    customlogo :{
        width: "50px"   
    },
    paper:{
      padding: "6px 16px",
      maxWidth:"200px"
    },
  }))

export default Tecnologies