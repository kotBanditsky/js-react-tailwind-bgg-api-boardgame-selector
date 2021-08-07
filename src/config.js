import bggXmlApiClient from 'bgg-xml-api-client';

export async function apiGet(queryString) {
        const {data} = await bggXmlApiClient.get('collection', { username: queryString }); 

console.log(data);

        if (data.item === null) {
            
        }
        const response = data.item;
        const results = response.filter((response) =>  response.status.own != 0);
        return results;    
}
    
