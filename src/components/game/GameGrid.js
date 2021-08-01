import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( {data} ) => {
    return <div className="grid grid-cols-3 gap-4">
                {data.map( ({ items }) =>  
                    <GameCard
                            key={items.item.objectid}
                            id={items.item.objectid}
                            name={items.item.name}
                            image={items.item.image ? items.item.image.thumbnail : IMAGE_NOT_FOUND}
                            summary={items.item.name}
                    />)
                }
            </div>;
};

export default GameGrid;