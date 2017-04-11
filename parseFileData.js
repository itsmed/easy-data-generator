// module.exports = 
function parseFileData(lines) {
  let l = lines.replace(/\r||\n||\r\n/, '\n').split('\n');
  
  if (l[0].length === 0) {
    l.shift();
  }
  let pathToWrite = l.shift();
  
  pathToWrite = parseFilePath(pathToWrite);
  console.log(pathToWrite);

  let data = l.reduce((arr, line) => {    
    arr.push(line.trim());
    return arr;
  }, []);
  
};

parseFileData( `/path/to/cool/file.js,
1x [,
  'hello',
  {
    first: 'one',
    second: 'two',
    third: 'three',
    fourth: [
      'a',
      'b',
      'c'
    ]
  }
]`
);

function parseFilePath(line){
  let slashIndex = line.lastIndexOf('/') === -1 ? undefined : line.lastIndexOf('/');
  let path = line.slice(0, slashIndex);
  let file = line.slice(slashIndex + 1);
  if (path === file) {
    path = undefined;
  } else {
    path += '/';
  }
  return { path, file, extension: file.slice(file.indexOf('.')) }
}
