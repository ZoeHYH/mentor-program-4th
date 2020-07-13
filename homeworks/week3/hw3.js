function prime(n) {
  const p = [];
  for (let i = 1; i < n + 1; i+= 1) {
    if (n % i === 0) p.push(i);
    if (p.length > 2) {
      console.log('Composite');
      break;
    }
  }
  if (p.length < 3) console.log('Prime');
}
