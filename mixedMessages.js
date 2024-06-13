import fs from 'fs';

const readJsonFile = fs.readFile('./sources/quotes.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    const randEl = jsonData.quotes[Math.floor(Math.random() * jsonData.quotes.length)];
    console.log(`Here is your random quote:\n"${randEl.quote}"\n~ ${randEl.author}`);
})