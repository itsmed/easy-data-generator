// module.exports = 
function parseFileData(lines) {

  const braces = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let openingBraces = Object.keys(braces);
  let closingBraces = Object.values(braces);

  let currentBraces = [];
  let dataToWrite;

  let l = lines.replace(/\r||\n||\r\n/, '\n').split('\n');
  
  if (l[0].length === 0) {
    l.shift();
  }
  let pathToWrite = l.shift();
  
  pathToWrite = parseFilePath(pathToWrite);
  // console.log(pathToWrite);

  let data = l.reduce((arr, line) => { 
    arr.push(line.trim());
    return arr;
  }, []);
  // console.log(data);

  data.forEach(line => {
    let counter;

    let l = line.split(' ');
    if (l[0].includes('x')) {
      counter = +(l.shift().replace('x', ''));
    }
    let tempBrace = [];
    if (l.length === 1) {
      tempBrace = l[0];
    }
    openingBraces.forEach(brace => {
      if (tempBrace.includes(brace)) {
        currentBraces.push(brace);
        // break;
      }
    });

    if (closingBraces.includes(tempBrace)) {
      let pastBrace = currentBraces.pop();
      console.log(pastBrace);
      if (pastBrace !== braces[pastBrace]) {
        return new Error('FUCKED UP');
      }
    }
  })
    // console.log(data);

};

parseFileData(`/path/to/cool/file.js,
1x [
  'hello'
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
