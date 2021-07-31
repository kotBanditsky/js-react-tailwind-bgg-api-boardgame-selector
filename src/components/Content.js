import React from 'react';
import ImageOne from '../images/egg-crispy.jpg';
import ImageTwo from '../images/egg-salad.jpg';

const Content = () => {
    return (
        <>
            <div className='menu-card'>
                <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Egg Crispy</h2>
                    <p className='mb-2'>Crispy, delicious, and nutritious</p>
                    <span>₹120</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Egg Salad</h2>
                    <p className='mb-2'>Veggies, delicious, and nutritious</p>
                    <span>₹100</span>
                </div>
            </div>
        </>
    );
};

export default Content;