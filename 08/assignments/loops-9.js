function shinyDiamondRug(n) {
    let lineCount = 1;
    let ans = "";
    let starCount = 1;
    let gap = n-1;
    while (lineCount < n) {
      let currStars = '';
      for (let i=0 ; i<gap ; i++) {
        currStars += ' ';
      }
      for (let i=1 ; i<=starCount ; i++) {
        currStars += '*'
      }
      ans += currStars;
      ans += '\n'
      lineCount++;
      starCount+=2;
      gap--;
    }
    while (lineCount > 0) {
      let currStars = '';
      for (let i=0 ; i<gap ; i++) {
        currStars += ' ';
      }
      for (let i=1 ; i<=starCount ; i++) {
        currStars += '*'
      }
      ans += currStars;
      lineCount--;
      if (lineCount > 0) ans += '\n';
      starCount-=2;
      gap++;
    }
    return ans;
  }
  
  // You just need to implement the shinyDiamondRug function
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const n = parseInt(input.trim(), 10);  // Get the number input
    const result = shinyDiamondRug(n);  // Call our function
    process.stdout.write(result);  // Output the result
  });
  