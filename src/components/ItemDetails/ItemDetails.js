import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons';



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
    height: 300,
    width: 300,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 300,
    width: 300,
    
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    color:'primary',
     size:'small',
     textAlign: 'center',
  }
}));

const ItemDetails = () => {

  const classes = useStyles();

  let history = useHistory();
  const handleCheckout= () => {
  history.push("/shipment")
  }

  const {itemKey}= useParams();
  const [details,setDetails] = useState({});
  const {name,price, picture}=details;

  useEffect(() =>{
    const selectedItem=fakeData.find(item => item.id ==itemKey)
    setDetails(selectedItem)
  },[itemKey])
  //const item=fakeData.find(data=>data.id===itemKey);
  //(item);
  //console.log(details);
const cartStyle = {
  paddingLeft:'90px',
  paddingRight:'30px',
  textAlign: 'justify',
}
  return (
    <div>
    
  <Grid className={classes.root} container spacing={6} direction="row" justify="space-between">
        <Grid item xs={6}  >
         
<div style={cartStyle} >
<h2>{name}</h2> 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse provident facilis enim, dolorum repudiandae quas tempore veritatis id, autem officia ad corrupti ipsum aperiam magni exercitationem mollitia maiores eveniet?</p>
         <br/>
        <h2> ${price}</h2>
      <Button onClick={handleCheckout} style={{backgroundColor: 'red'}}><FontAwesomeIcon icon={faCartPlus} />Add Cart</Button>
</div>

        
        </Grid>
        <Grid item xs={6}>
          <div>
          <img className={classes.media}  src={picture} alt=""/>
          </div>
     
        </Grid>
        
      </Grid>
 
    </div>
  );
};

export default ItemDetails;