import React, {useState}  from 'react';
import { apiGet } from '../config'
import GameGrid from './game/GameGrid';

const Content = () => {
    const [input, setInput] = useState('');
    const [results, setResuts] = useState(null);

    const onInputChange = (ev) => {
        setInput(ev.target.value);
    }

    const onSearch = () => {
        // apiGet(`${input}?own=1`).then(result => {
        //     setResuts(result);
        // });

        apiGet(input).then(result => {
            setResuts(result);
        });

        // apiGet(`/search/shows?q=${input}`).then(result => {
        //     setResuts(result);
        // });
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
        return null;
    };

    return (

        <div className='w-full md:max-w-3xl mx-auto pt-20 justify-center items-center'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>What to play?</h1>


            <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="w-5 mb-10 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>

                <input type="text" onChange={onInputChange} value={input} class="w-full mb-10 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
            </div>

            <button className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce' onClick={onSearch}>
                Check Now
            </button>

            <div>{renderResults()}</div>

        </div>
     
    );
};

export default Content;