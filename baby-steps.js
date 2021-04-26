const args = process.argv.slice(2);

const sumOfArgs = args.reduce((prev, current) => (prev += Number(current)), 0);

console.log(sumOfArgs);
