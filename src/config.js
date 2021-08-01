const API_BASE_URL2 = 'https://www.boardgamegeek.com/xmlapi/collection/';

// const API_TEST_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {

    // const response = await fetch( `${API_TEST_URL}${queryString}` )
    // .then(r => r.json());

    // return response;

    // const response = await fetch(`${API_BASE_URL2}${queryString}`);

    var response = null;

    const https = require('https');
    var parseString = require('xml2js').parseString;
    
    https.get(`${API_BASE_URL2}${queryString}`, (resp) => {
        let data = '';
    
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
    
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            //console.log(JSON.parse(data).explanation);
            parseString(data, function (err, result) {
             //   console.log(JSON.stringify(result));

            response = (JSON.stringify(result));
            console.log(response);
            });
        });
    
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    return response;
}