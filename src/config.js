import bggXmlApiClient from 'bgg-xml-api-client';

export async function apiGet(queryString, players) {
    const {data} = await bggXmlApiClient.get('collection', { username: queryString });
    const response = data.item;
    // eslint-disable-next-line
    const results = response.filter((response) =>  response.status.own != 0 && response.stats.maxplayers >= players);
    return results;
}

export async function apiGetRandom(queryString, players) {
    const {data} = await bggXmlApiClient.get('collection', { username: queryString });
    const response = data.item;
    // eslint-disable-next-line
    const results = response.filter((response) =>  response.status.own != 0 && response.stats.maxplayers >= players);
    const item = results[Math.floor(Math.random()*results.length)];
    console.log(item);
    return item;
}
    
