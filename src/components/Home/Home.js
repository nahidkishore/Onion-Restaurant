import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData';
import FoodItem from '../FoodItem/FoodItem';
import FoodItemNav from '../FoodItemNav/FoodItemNav';


const Home = () => {
  const [items,setItems]=useState(fakeData);
  const handleItem=(item) =>{
    const lunchItem=fakeData.filter(data => data.category ===item);
    setItems(lunchItem);
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className='my-4'>
                <FoodItemNav handleItem={handleItem}></FoodItemNav>
            </div>


           <div className='row d-flex justify-content-between mx-2'>

    {
       items.map(item=> <FoodItem item={item}></FoodItem>)
          }
            </div>

            <div className="text-center">
              <button>Checkout Your Food</button> 
            </div>
     



   
    </div>
  );
};

export default Home;