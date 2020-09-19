import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardMedia } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 375,
    textAlign: 'center',
    padding: theme.spacing(2),
 
  },
  paper: {
   
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 18,
  },
  media: {
    height: 400,
    
  },
  pos: {
    marginBottom: 12,
  },
}));

const FoodItem = (props) => {
  const {name, price, picture,id,details} = props.item;
 
const classes = useStyles();

let history = useHistory();
const handleDetails= () => {
history.push(`/item/${id}`)
}
  return (

<div >
      <Grid className={classes.root} container spacing={6} justify="space-between">
        <Grid item xs={12}  >
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
          <Card className={classes.root} variant="outlined">
          <CardActionArea onClick={handleDetails}>
          <CardMedia
          className={classes.media}
          image={picture}
          title=""
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {name}
        </Typography>
        <Typography variant="h5" component="p">
          {details}
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          ${price}
        </Typography>
      
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={handleDetails} >Details More</Button>
      
     
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </div>
    
  );
};

export default FoodItem;