//synchronus method
const {readFileSync, writeFileSync} = require('fs')
console.log('start');
//the above is same as
// const fs = require('fs')
// fs.readFileSync


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second); // shows what is in the files

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a'}
)//creates new file //flag a for append
console.log('done with this task');
console.log('starting the next task');


