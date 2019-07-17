import program from 'commander';
import fs from 'fs';
import * as path from 'path';
import readline from 'readline';
import through2 from 'through2';
import concat from 'concat';
import { jsonTransform } from './convertor';

function reverse() {
  process.stdout.write('Enter a string: ');
  readFromStdIn().then(data => {
    console.log(
      data
        .split('')
        .reverse()
        .join('')
    );
  });
}

function transform() {
  process.stdout.write('Enter a string: ');
  process.stdin
    .pipe(
      through2(function(chunk, _enc, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
      })
    )
    .on('data', data => {
      process.stdout.write(data.toString());
    });
}

function outFile(filePath) {
  fs.createReadStream(filePath).pipe(process.stdout);
}

function convertFromFile(filePath) {
  fs.createReadStream(filePath)
    .pipe(jsonTransform)
    // .pipe(process.stdout)
    .on('data', data => console.log(data));
}

function convertToFile(filePath) {
  const writer = fs.createWriteStream(filePath.replace('.csv', '.json'));
  fs.createReadStream(filePath)
    .pipe(jsonTransform)
    .pipe(writer);
}

function cssBundler(dirPath) {
  const bundleFilePath = path.join(dirPath, 'bundle.css');
  if (fs.existsSync(bundleFilePath)) {
    fs.unlinkSync(bundleFilePath);
  }
  const cssFiles = fs
    .readdirSync(dirPath)
    .map(file => path.join(dirPath, file));
  concat(cssFiles, bundleFilePath).then(() => {
    fs.appendFileSync(
      bundleFilePath,
      `.ngmp18 {
        background-color: #fff;
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
      }
      .ngmp18__hw3 {
        color: #333;
      }
      .ngmp18__hw3--t7 {
        font-weight: bold;
      }`,
      'utf-8'
    );
  });
}

function readFromStdIn() {
  return new Promise(resolve => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    rl.on('line', function(line) {
      resolve(line);
      rl.close();
    });
  });
}

function isExist(path) {
  if (!fs.existsSync(path)) {
    throw new Error(program.file + " doesn't exist");
  }
}

program
  .version('1')
  .option(
    '-t, --task <task>',
    'Task to perform',
    /^(reverse|transform|outFile|convertFromFile|convertToFile|cssBundler)$/
  )
  .option('-f, --file [filename]', 'File to be processed')
  .option('-l, --location [location]', 'Path of csv files')
  .parse(process.argv);

if (process.argv.length < 3) {
  program.help();
}

const fileTasks = {
  outFile: outFile,
  convertFromFile: convertFromFile,
  convertToFile: convertToFile
};

switch (program.task) {
  case 'reverse':
    reverse();
    break;
  case 'transform':
    transform();
    break;
  case 'outFile':
  case 'convertFromFile':
  case 'convertToFile': {
    const absPath = path.join(__dirname, '..', program.file);
    isExist(absPath);
    fileTasks[program.task](absPath);
    break;
  }
  case 'cssBundler': {
    const absPath = path.join(__dirname, '..', program.location);
    isExist(absPath);
    cssBundler(absPath);
    break;
  }
  default:
    program.help();
}
