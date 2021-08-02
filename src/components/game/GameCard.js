import React from 'react';

const GameCard = ({ id, image, name, summary, yearpublished, rating, minpl, maxpl, time }) => {

    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
  return (

  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="bg-white shadow-lg border-gray-100 max-h-60	w-full border sm:rounded-3xl p-8 flex space-x-8">
      
      <div class=" h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
        <img src={image} alt="Just a flower" class=" w-full  object-scale-down lg:object-cover object-top lg:h-48 rounded-2xl" />
      </div>

      <div class="flex flex-col w-1/2 space-y-4">
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-bold">{name}</h2>
          <div class="bg-yellow-400 font-bold rounded-xl p-2">{rating}</div>
        </div>
        <div>
          <div class="text-sm text-gray-400">Published</div>
          <div class="text-lg text-gray-800">{yearpublished}</div>
        </div>
          <p class=" text-gray-400 max-h-40 overflow-y-hidden">{time} minutes average to play</p>
        <div class="flex text-2xl font-bold text-a">{minpl} - {maxpl} players</div>
      </div>

    </div>
  </div>
  


    );
  };

export default GameCard;