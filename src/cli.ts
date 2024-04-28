import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import fizzBuzz from './index.js';

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('fizzbuzz')
  .description(pkg.description)
  .version(pkg.version)
  .parse(process.argv);

const args = program.args;

if (args.length === 0) {
  console.error('Error: No arguments provided. Please provide at least one argument.');
  process.exit(1);
}

if (args.length > 1) {
  console.error('Error: Too many arguments provided. Please provide only one argument.');
  process.exit(1);
}

const value = Number(args[0]);

if (Number.isNaN(value)) {
  console.error(`Error: ${ args[0] } is not a number.`);
  process.exit(1);
}

if (!Number.isInteger(value)) {
  console.error(`Error: ${ value } is not an integer.`);
  process.exit(1);
}

try {
  const result = fizzBuzz(value);
  console.log(result);
  process.exit(0);
} catch (err) {
  if (err instanceof Error) {
    console.error(`Error: ${ err.message }`);
  } else {
    console.error(`Error: Unexpected error.`);
  }
  process.exit(1);
}
