const { readFileSync } = require('fs')

// Read a file and get its string repr
const file = readFileSync(process.argv[2]).toString()

console.log(file.split('\n').length - 1)
