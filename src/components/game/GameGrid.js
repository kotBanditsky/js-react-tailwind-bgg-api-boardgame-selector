import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( { data } ) => {

    return <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 px-10 mb-20">
                   { data.map( (  data  ) =>  
                             <GameCard
                                 key={data._attributes.objectid}
                                 name={data.name._text}
                                 image={data.image ? data.image._text : IMAGE_NOT_FOUND}
                                 yearpublished={data.yearpublished._text}
                                 rating={data.stats.rating._attributes.value}
                                 minpl={data.stats._attributes.minplayers}
                                 maxpl={data.stats._attributes.maxplayers}
                                 time={data.stats._attributes.playingtime}

                              />
                    )} 
            </div>;
};

export default GameGrid;