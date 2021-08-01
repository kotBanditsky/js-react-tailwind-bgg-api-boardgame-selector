import React from 'react';

const GameCard = ({ id, image, name, summary }) => {

    console.log(id);
    console.log(image);
    console.log(name);
    console.log(summary);

    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
    return (

        <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">

            <img class="object-cover w-full h-56" src={image} alt="avatar" />
            
            <div class="py-5 text-center">
                <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white">{name}</a>
                <span class="text-sm text-gray-700 dark:text-gray-200">{summaryAsText}</span>
            </div>

        </div>

    );
  };

export default GameCard;