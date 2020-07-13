const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  const n = JSON.parse(body);
  for (let i = 0; i < 10; i += 1) {
    console.log(`${n[i].id} ${n[i].name}`);
  }
});
