
export async function apiGet(queryString) {

const convert = require('xml-js');

var options = { compact: true };

let dataparser;

await fetch(`https://www.boardgamegeek.com/xmlapi/collection/${queryString}?own=1'`)
            .then(response => response.text())
            .then(str => {
                dataparser = JSON.parse(convert.xml2json(str,options))
});

const results = dataparser.items.item;

return results;  

}
    
