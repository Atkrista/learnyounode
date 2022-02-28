// Array.prototype.splice(start) removes items beginning
// from array index == start
// Returns the result
args = process.argv.splice(2)

// A simple accumulator implementation using reduce
console.log(args.reduce((prev, cur) => { return prev + Number(cur)}, 0))
