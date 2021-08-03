import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( {data} ) => {
    
    return <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 px-10 mb-20">
                   { data.map( ( data ) =>  
                           { if  (data.status.own != 0) {
                            return (
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
                            )}}
                    )} 
            </div>;
};

export default GameGrid;