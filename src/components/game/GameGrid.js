import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( {data} ) => {
    
    return <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2">
                   { data.map( ( data ) =>  
                             <GameCard
                                key={data.objectid}
                                id={data.objectid}
                                name={data.name.text}
                                image={data.image ? data.image : IMAGE_NOT_FOUND}
                                summary={data.name.text}
                                yearpublished={data.yearpublished}
                                rating={data.stats.rating.value}
                                minpl={data.stats.minplayers}
                                maxpl={data.stats.maxplayers}
                                time={data.stats.playingtime}
                            />
                    )} 
            </div>;
};

export default GameGrid;