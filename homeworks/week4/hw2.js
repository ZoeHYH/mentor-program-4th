const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
  const n = JSON.parse(body);
  const in1 = process.argv[2];
  const in2 = in1 === 'create' ? process.argv[3] : Number(process.argv[3]);
  const in3 = process.argv[4];
  switch (in1) {
    default:
      for (let i = 0; i < n.length; i += 1) {
        console.log(`${n[i].id} ${n[i].name}`);
      }
      break;
    case 'list':
      for (let i = 0; i < n.length; i += 1) {
        console.log(`${n[i].id} ${n[i].name}`);
      }
      break;
    case 'read':
      for (let i = 0; i < n.length; i += 1) {
        if (n[i].id === in2) {
          console.log(n[i].name);
          break;
        }
        if (i === n.length - 1) console.log('Not Found');
      }
      break;
    case 'delete':
      for (let i = 0; i < n.length; i += 1) {
        if (n[i].id === in2) {
          n.splice(i, 1);
          console.log(`${n[i].id} ${n[i].name}`);
          break;
        }
        if (i === n.length - 1) console.log('Not Found');
      }
      break;
    case 'create':
      n.push({ name: in2 });
      console.log(`${n[n.length - 1].id} ${n[n.length - 1].name}`);
      break;
    case 'update':
      for (let i = 0; i < n.length; i += 1) {
        if (n[i].id === in2) {
          [n[i].name] = in3;
          console.log(`${n[i].id} ${n[i].name}`);
          break;
        }
      }
      n[n.length] = { id: in2, name: in3 };
      console.log(`${n[n.length].id} ${n[n.length].name}`);
      break;
  }
});
