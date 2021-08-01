import bggXmlApiClient from 'bgg-xml-api-client';
const API_BASE_URL2 = 'https://www.boardgamegeek.com/xmlapi/collection/';
const API_TEST_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
    console.log(queryString);

    const { data } = await bggXmlApiClient.get('collection', { username: queryString });

    const response = data.item;
    console.log(response);
    return response;

    // const response = await fetch( `${API_TEST_URL}${queryString}` )
    // .then(r => r.json());

    // return response;
}
    
