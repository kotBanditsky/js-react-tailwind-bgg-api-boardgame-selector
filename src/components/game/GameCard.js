import React from 'react';

const GameCard = ({ id, image, name, summary, yearpublished, rating, minpl, maxpl, time }) => {

    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
  return (

  <div class="py-3">
    <div class="bg-white shadow-lg border-gray-100 h-full	w-full border sm:rounded-3xl p-8 flex">
      
      <div class="flex flex-col w-full space-y-4">

        <div class="h-72 w-full mb-0 mb-3">
          <img src={image} alt="Just a flower" class="w-full  object-scale-down lg:object-cover object-top h-72 rounded-2xl" />
        </div>

        <div >
          <h2 class="text-xl mb-2 font-bold justify-self-start">{name}</h2>
          <div class="text-lg text-gray-800">Published: {yearpublished}</div>
          <p class="text-gray-500 h-full">Minutes to play: {time}</p>
        </div>

          <div class="flex justify-between ">
            <div class="text-xl font-bold justify-self-start">{minpl} - {maxpl} players</div>
            <div class="bg-yellow-400 font-bold rounded-xl p-2 ml-2 justify-self-end">{rating}</div>
          </div>
      </div>

    </div>
  </div>
  


    );
  };

export default GameCard;