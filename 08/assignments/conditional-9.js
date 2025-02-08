// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    if (scale == "C") {
      return `${9/5*value + 32}` + '°F';
    } else {
      return `${5/9*(value - 32)}` + '°C';
    }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { value, scale } = JSON.parse(input);
    const result = convertTemperature(value, scale);
    process.stdout.write(JSON.stringify(result));
  });