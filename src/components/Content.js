import React, {useState}  from 'react';
import { apiGet } from '../config'
import GameCard from './game/GameCard';
import GameGrid from './game/GameGrid';
import IMAGE_NOT_FOUND from './images/not-found.png';

const Content = () => {
    const [input, setInput] = useState('');
    const [players, setPlayers] = useState(2);
    const [results, setResuts] = useState(null);
    const [operation, setOperation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    }

    const onPlayersChange = (ev) => {
        setPlayers(players + 1);
        if( players >= 8 ) {
            setPlayers(1);
        }
    }
 
    const onSearch = () => {
        setError(0);
        setLoading(true);
        apiGet(input).then(result => {
            setResuts(result);
            setOperation(result);
        }).catch((err) => {
            setError(1);
        }).finally(() => {
            setLoading(false);
        });;
    };

    const onSearchRandom = () => {

        if (results && results.length === 0) {
            return <div>Not found</div>
        }

        if (results && results.length > 0) {
            const RandomResults = results.filter((results) => results.stats._attributes.maxplayers >= players && results.stats._attributes.minplayers <= players);
            const RandomItem = RandomResults[Math.floor(Math.random()*RandomResults.length)];
            setOperation(RandomItem);
        } 
    };

    const onSearchAll = () => {
        if (results && results.length === 0) {
            return <div>Not found</div>
        }

        if (results && results.length > 0) {
            const RandomResults = results.filter((results) => results.stats._attributes.maxplayers >= players && results.stats._attributes.minplayers <= players);
            setOperation(RandomResults);
        } 
    };

    const renderResults = () => {
        if (operation && operation.length === 0) {
                return <div className='mb-20 px-3 flex justify-center items-center'>Not found</div>
        }

        if (loading) {
                
                return <div className='mb-20 px-3 flex justify-center items-center'>Data is loading...</div>;
        }
        
        if (error === 1) {
            return <div className='mb-20 px-3 flex justify-center items-center'>There was an error loading your BGG profile!</div>;
        } else if (operation && operation.length > 0) {
                return (
                    <GameGrid data = {operation} />
                );
        } 
            
        if (typeof operation === 'object' && operation != null) {
                return ( 
                    <div className='mb-20 px-3 flex justify-center items-center'>
                        <div className="w-96 lg:w-96 sm:w-auto md:w-auto">

                    <GameCard 
                                name={operation.name._text}
                                image={operation.image ? operation.image._text : IMAGE_NOT_FOUND}
                                yearpublished={operation.yearpublished._text} 
                                rating={operation.stats.rating._attributes.value}
                                minpl={operation.stats._attributes.minplayers}
                                maxpl={operation.stats._attributes.maxplayers}
                                time={operation.stats._attributes.playingtime}
                    />  
                    </div>
                    </div>
                );
            }
            return null;
    };

    return (

        <div>

            <div className='w-full max-w-3xl mx-auto px-10 mt-10'>

                <h1 className='text-center lg:text-8xl  md:text-7xl sm:text-7xl text-7xl font-black mb-14'>What to play?</h1>

                <div class="flex space-x-4 justify-between content-center">

                    <input type="text" onChange={onInputChange} value={input} class="w-full border text-xl border-gray-300 font-bold rounded-full text-center text-gray-600 h-14 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" placeholder="BoardGameGeek" />

                    <button className='flex bg-blue-500 rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600 mr-6' onClick={onSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 stroke-current text-white stroke-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                    
                </div>
                
                <div className='flex space-x-4 mt-8 justify-between content-center'>
                            <button onClick={onPlayersChange} value={players} class="p-2 justify-center font-bold px-8 bg-yellow-500 rounded-full text-xl hover:bg-yellow-300">{players}</button>

                            <button className='h-14 w-full bg-yellow-500 rounded-full text-xl font-bold hover:bg-yellow-300' onClick={onSearchRandom}>
                                Random
                            </button>

                            <button className='h-14 w-full bg-yellow-500 rounded-full text-xl font-bold hover:bg-yellow-300' onClick={onSearchAll}>
                                See all
                            </button>
                </div>

            </div>
        
            <div className='w-full pt-10'>

                <div>{renderResults()}</div>

            </div>
            

        </div>
    );
};

export default Content;