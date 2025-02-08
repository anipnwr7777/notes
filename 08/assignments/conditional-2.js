// You just need to implement the findLargest function
function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    let max = a;
    if (b>max) max = b;
    if (c>max) max = c;
    return max;
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { a, b, c } = JSON.parse(input);
    const result = findLargest(a, b, c);
    process.stdout.write(JSON.stringify(result));
  });