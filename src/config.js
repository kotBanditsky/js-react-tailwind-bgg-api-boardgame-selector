import bggXmlApiClient from 'bgg-xml-api-client';

export async function apiGet(queryString) {
    console.log(queryString);

    const { data } = await bggXmlApiClient.get('collection', { username: queryString });

    const response = data.item;
    console.log(response);
    return response;
}
    
