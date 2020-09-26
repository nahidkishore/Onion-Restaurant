import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardMedia } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    minWidth: 475,
    textAlign: 'center',
    padding: theme.spacing(3),
 
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
  //console.log(props);
  const {name, price, picture,id,details,handleAddItem} = props.item;
 
const classes = useStyles();

let history = useHistory();
const handleDetails= () => {
history.push(`/item/${id}`)
}
  return (

<div >
      <Grid className={classes.root} container spacing={6} justify="space-between">
        <Grid item xs={12} md={6}  >
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
        </Typography> <br/> <br/>
       
      
      </CardContent>
      </CardActionArea>
      <Typography className="d-flex justify-content-between" >
          ${price}  <button  onClick={() =>props.handleAddItem(props.item)} className="btn btn-danger">Buy</button>

        </Typography>
      <CardActions>
     {/*  <Button onClick={handleDetails} style={{textAlign: 'center', paddingLeft:'35%'}}>Details More</Button> */}
      
     
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </div>
    
  );
};

export default FoodItem;