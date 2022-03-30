import React from 'react'
import {CardContent, makeStyles, CardMedia, Grid, Card, Typography, Link} from "@material-ui/core"
import mockData from "../mockdata"


const Mywork = ({title, id , dark}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
     <div className={classes.sectioncontend} id = {id}>
        <Typography variant= "h3">{title}</Typography>
        <Grid container className={classes.grid}>
          {
            mockData.map(({title, image, link}, index)=>(
              <Grid iten key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia image={image} className={classes.caratula} title="caratula"/>
                  <CardContent>
                    <Link href={link} color="primary" target="_blank" rel= "noopener noreferrer">
                        {title}
                    </Link>
                  </CardContent>

                </Card>

              </Grid>
            ))
          }          
        </Grid>        
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
    maxWidth:"90vw",
    margin: "0 auto",
    padding: theme.spacing(5),


  },
  grid:{
    marginTop: theme.spacing(1),

  },
  card:{
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  }, 
  caratula:{
    height:0,
    padding: "36.25%" //16.9
  }
  
}))

export default Mywork