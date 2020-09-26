import React, { useState } from 'react';

const FoodItemNav = (props) => {
  const [type, setType] = useState("breakfast");
  
  return (
    <div className='text-center'>
            <button className={type === 'breakfast' ? 'active m-5' : 'm-5'} onClick={() =>  props.handleItem('breakfast') }>Breakfast</button>
            <button className={type === 'lunch' ? 'active m-5' : 'm-5'} onClick={() => props.handleItem('lunch')}>Lunch</button>
            <button className={type === 'dinner' ? 'active m-5' : 'm-5'} onClick={() => props.handleItem('dinner')}>Dinner</button>
        </div>
  );
};

export default FoodItemNav;