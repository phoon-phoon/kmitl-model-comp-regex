// Defind Variable
const ReadTestEmail = require('./ReadTestEmail')
const contents = new ReadTestEmail().contents
// console.log('contents', contents)

/*
- w matches alphanumeric characters, which means a-z, A-Z, and 0-9. It also matches the underscore, _, and the dash, -.
- d matches digits, which means 0-9.
- s matches whitespace characters, which include the tab, new line, and space characters.
- S matches non-whitespace characters.
- . matches any character except the new line character n.

flags
- i (ignore case): This flag makes the pattern case-insensitive, allowing it to match both uppercase and lowercase letters.
- g (global search): This flag enables the regex to search for all occurrences of the pattern in the input string, rather than stopping after the first match.
- m (multiline): This flag enables the regex to match the start and end of each line in a multiline string when using the ^ and $ anchors.

How to use regular expression in javascript?
const re = /\w+/g;
// OR
const re = new RegExp("\\w+/", "ig");

The exec() and test() methods of RegExp.
The match(), matchAll(), replace(), replaceAll(), search() and split() methods of String.
*/

const pattern = /From:.*/g;
const patternGroup = /(From:.*)|(To:.*)/ig;

// exec()
// var patternExecuted;
// while ((patternExecuted = patternGroup.exec(contents)) !== null) {
//   console.log('exec() > Found:', patternExecuted[0]); // ข้อมูลที่สอดคล้องกับ regular expression ที่ค้นพบ
//   console.log('exec() > First Capture Group:', patternExecuted[1]); // ข้อมูลจากกลุ่มที่จับคู่ครั้งแรก
//   console.log('exec() > Second Capture Group:', patternExecuted[2]); // ข้อมูลจากกลุ่มที่จับคู่ครั้งที่สอง
//   console.log('exec() > Index:', patternExecuted.index); // ตำแหน่งที่เริ่มต้นของการพบข้อมูล
//   // console.log('exec() > Input:', patternExecuted.input); // ข้อมูลเต็มทั้งหมดที่ทำการค้นหา
// }

// test()
// var tested = pattern.test(contents)
// console.log('test() :', tested)

// match()
// var matched = contents.match(pattern)
// var matched = contents.match(patternGroup)
// console.log('match() :', matched)

// matchAll()
// var matchedAll = contents.matchAll(patternGroup) // Return Object
// var matchedAll = [...contents.matchAll(pattern)]
// var matchedAll = [...contents.matchAll(patternGroup)]
// matchedAll.forEach((matchedA) => console.log('matchAll() :', matchedA))


// // replace()
// var replaced = matched[0].replace(/<|>/, '_')
// console.log('replace() :', matched[0], replaced)

// // replaceAll()
// var replacedAll = matched[0].replaceAll(/<|>/g, '_')
// console.log('replaceAll() :', matched[0], replacedAll)

// search()
// var found = contents.search(pattern)
// console.log('search() :', found)

// split()
// var lines = contents.split(/\r\n/);
// lines.forEach((line, index) => {
//     console.log(`split() > Line ${index + 1}: ${line}`);
// });
// lines = lines.filter((line) => line.startsWith('From:'));
// console.log('lines', lines)

