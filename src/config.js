
export async function apiGet(queryString) {

        // const {data} = await bggXmlApiClient.get('collection', { username: queryString }); 
        // console.log(data);
        // const response = data.item;
        // const results = response.filter((response) =>  response.status.own != 0);

const convert = require('xml-js');
let dataparser;

await fetch('https://www.boardgamegeek.com/xmlapi/collection/kotbanditsky?own=1')
            .then(response => response.text())
            .then(str => {
                dataparser = JSON.parse(convert.xml2json(str))
});

const results = dataparser.elements[0].elements;
// console.log(results);
 console.log(results.[0].elements[4]["attributes"].minplayers);

// console.log(results.[0].elements[4].attributes.maxplayers);

return results; 

// console.log(dataparser.elements[0].elements[0].elements[4].attributes.maxplayers);

// const results2 = results.filter((results) =>  dataparser.elements[0].elements != 0);

// const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
//      r.json()
// );

    // const https = require('https');
    // var parseString = require('xml2js').parseString;

    // https.get('https://www.boardgamegeek.com/xmlapi/collection/kotbanditsky?own=1', (resp) => {
    //     // let data = '';

    //     // resp.on('data', (chunk) => {
    //     //     data += chunk;
    //     //     console.log(chunk)
    //     // });

    //     // The whole response has been received. Print out the result.
    //     // resp.on('end', () => {
    //         parseString(resp, function (err, result) {
    //             console.log(result);
    //         });
    //     // });

    //     // }).on("error", (err) => {console.log("Error: " + err.message);
    // });

    //    return results;    
}
    
