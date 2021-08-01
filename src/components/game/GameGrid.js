import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( {data} ) => {
    
    return <div className="grid grid-cols-3 gap-4">
                   { data.map( ( data ) =>  
                             <GameCard
                                key={data.objectid}
                                id={data.objectid}
                                name={data.name.text}
                                image={data.thumbnail ? data.thumbnail : IMAGE_NOT_FOUND}
                                summary={data.name.text}
                            />
                    )} 
     

            </div>;
};

export default GameGrid;