const stringToPrint = '|/-\\|/-\\|';
let i = 0;
const intervalId = setInterval(()=>{
  if (i === stringToPrint.length) {
    clearInterval(intervalId);
    return console.log('\n');
  }
  process.stdout.write(`\r${stringToPrint[i]}`);
  i++;
}, 200);