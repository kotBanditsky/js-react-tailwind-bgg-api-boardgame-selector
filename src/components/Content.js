import React, {useState}  from 'react';
import { apiGet, apiGetRandom } from '../config'
import GameCard from './game/GameCard';
import GameGrid from './game/GameGrid';
import IMAGE_NOT_FOUND from './images/not-found.png';

const Content = () => {
    const [input, setInput] = useState('');
    const [players, setPlayers] = useState(0);
    const [results, setResuts] = useState(null);

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    }

    const onPlayersChange = (ev) => {
        setPlayers(ev.target.value);
    }
 
    const onSearch = () => {
        apiGet(input, players).then(result => {
            console.log(results);
            setResuts(result);
        });
    };

    const onSearchRandom = () => {
        apiGetRandom(input, players).then(result => {
            console.log(typeof results);
            setResuts(result);
        });
    };

    const renderResults = () => {
        if (results && results.length === 0) {
                return <div>Not found</div>
            }
        
            if (results && results.length > 0) {
                return (
                    <GameGrid data = {results} />
                );
            } 
            
            if (typeof results === 'object') {
                return ( 
                    <div className='mb-20 px-3'>
                    <GameCard 
                        name={results.name.text}
                        image={results.image ? results.image : IMAGE_NOT_FOUND}
                        yearpublished={results.yearpublished}
                        rating={results.stats.rating.value}
                        minpl={results.stats.minplayers}
                        maxpl={results.stats.maxplayers}
                        time={results.stats.playingtime}
                    /> 
                    </div>
                );
            }
            return null;
    };

    return (

        <div>

            <div className='w-full max-w-3xl mx-auto  pt-20 px-10'>

                <h1 className='text-center lg:text-8xl  md:text-7xl sm:text-7xl text-7xl font-black mb-14'>What to play?</h1>

                <div class="flex space-x-4 justify-between content-center">
 
                    <input type="text" onChange={onInputChange} value={input} class="w-full border border-gray-300 rounded-full text-center text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" placeholder="BoardGameGeek Name" />

                    <select onChange={onPlayersChange} value={players}  class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none ">
                        <option value="" disabled selected>Players</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                        
                </div>
                
                <div className='flex space-x-4 mt-8 justify-between content-center'>
                            <button className='py-6 w-full  bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300' onClick={onSearchRandom}>
                                Random
                            </button>

                            <button className='py-6 w-full  bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300' onClick={onSearchRandom}>
                                Sync
                            </button>

                            <button className='py-6  w-full   bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300' onClick={onSearch}>
                                All
                            </button>
                </div>

            </div>
        
            <div className='w-full pt-10 '>

                <div>{renderResults()}</div>

            </div>
            

        </div>
    );
};

export default Content;