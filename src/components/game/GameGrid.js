import React from 'react';
import GameCard from './GameCard';
import IMAGE_NOT_FOUND from '../images/not-found.png';

const GameGrid = ( { data } ) => {
 console.log(data);
    return <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 px-10 mb-20">
                   { data.map( (  data  ) =>  
                   
                             <GameCard
                             
                                key={data.elements[0]["attributes"].objectid}
                                name={data.elements[0].elements[0].text}
                                image={data.elements[2].elements[0].text ? data.elements[2].elements[0].text : IMAGE_NOT_FOUND}
                                yearpublished={data.elements[1].elements[0].text}
                                
                              //  rating={data.[0].elements[4].elements[0]["attributes"].value}

                           //   [0].elements[4].attributes.maxplayers
                                minpl={data.elements[0].elements[0]["attributes"].minplayers}
                             //   maxpl={data.elements[4].attributes.maxplayers}
                             //   time={data.elements[0].attributes.playingtime}
                            />
                    )} 
            </div>;
};

export default GameGrid;