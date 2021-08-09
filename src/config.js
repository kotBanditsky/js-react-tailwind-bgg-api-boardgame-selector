
export async function apiGet(queryString) {

const convert = require('xml-js');
let dataparser;

await fetch('https://www.boardgamegeek.com/xmlapi/collection/kotbanditsky?own=1')
            .then(response => response.text())
            .then(str => {
                dataparser = JSON.parse(convert.xml2json(str))
});

const results = dataparser.elements[0].elements;

//  console.log(results);
//  console.log(results.[0].elements[4]["attributes"].minplayers);

return results;  
}
    
