import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/fakeData';
import FoodItem from '../FoodItem/FoodItem';
import FoodItemNav from '../FoodItemNav/FoodItemNav';
import Footer from '../Footer/Footer';
import WhyChoose from '../WhyChoose/WhyChoose';


const Home = () => {
  const [items,setItems]=useState(fakeData);
  const handleItem=(item) =>{
    const lunchItem=fakeData.filter(data => data.category ===item);
    setItems(lunchItem);
  }
  const [cart,setCart]=useState([]);
  const handleAddItem=(item)=>{
    console.log('product added',item);
    const newCart=[...cart,item];
    setCart(newCart);
  }
  return (
    <div>
     
      <div className='my-4'>
                <FoodItemNav handleItem={handleItem}></FoodItemNav>
            </div>


           <div className='row d-flex justify-content-between mx-2'>

    {
       items.map(item=> <FoodItem item={item} key={item.id} handleAddItem={handleAddItem}></FoodItem>)
          }
            </div>

            <div className="text-center">
              <button >Checkout Your Food</button> 
            </div>
     

<WhyChoose></WhyChoose>
<Footer></Footer>
<Cart cart={cart}></Cart>
   {/* <div>
     <h2>order summary</h2>
        <h5>summary:{cart.length}</h5>
   </div> */}
    </div>
  );
};

export default Home;