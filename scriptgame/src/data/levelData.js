export const levelData = [
  {
    level: 1,
    question: "다음 코드의 출력 결과는?",
    code: 'console.log("Hello World");',
    answer: "hello world",
    hint: "console.log는 괄호 안의 내용을 그대로 출력합니다. 대소문자를 주의하세요."
  },
  {
    level: 2,
    question: "다음 코드의 출력 결과는?",
    code: 'let x = 5;\nlet y = 3;\nconsole.log(x + y);',
    answer: "8",
    hint: "숫자끼리의 + 연산은 덧셈을 수행합니다."
  },
  {
    level: 3,
    question: "다음 코드의 출력 결과는?",
    code: 'const name = "JavaScript";\nconsole.log(`Hello ${name}!`);',
    answer: "hello javascript!"
  },
  {
    level: 4,
    question: "다음 배열의 길이는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length);',
    answer: "5"
  },
  {
    level: 5,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "Hello";\nconsole.log(str.toLowerCase());',
    answer: "hello"
  },
  {
    level: 6,
    question: "다음 코드의 출력 결과는?",
    code: 'const num = 10;\nconsole.log(typeof num);',
    answer: "number"
  },
  {
    level: 7,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.join("-"));',
    answer: "1-2-3"
  },
  {
    level: 8,
    question: "다음 코드의 출력 결과는?",
    code: 'const obj = { name: "John" };\nconsole.log(obj.name);',
    answer: "john"
  },
  {
    level: 9,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr[2]);',
    answer: "3"
  },
  {
    level: 10,
    question: "다음 코드의 출력 결과는?",
    code: 'const x = true;\nconst y = false;\nconsole.log(x && y);',
    answer: "false"
  },
  {
    level: 11,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "JavaScript";\nconsole.log(str.length);',
    answer: "10"
  },
  {
    level: 12,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.includes(2));',
    answer: "true"
  },
  {
    level: 13,
    question: "다음 코드의 출력 결과는?",
    code: 'const num = 5.7;\nconsole.log(Math.floor(num));',
    answer: "5"
  },
  {
    level: 14,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "Hello";\nconsole.log(str.charAt(1));',
    answer: "e"
  },
  {
    level: 15,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.reverse());',
    answer: "3,2,1"
  },
  {
    level: 16,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "Hello,World";\nconsole.log(str.split(","));',
    answer: "hello,world"
  },
  {
    level: 17,
    question: "다음 코드의 출력 결과는?",
    code: 'const num = -5;\nconsole.log(Math.abs(num));',
    answer: "5"
  },
  {
    level: 18,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2));',
    answer: "2,4,6"
  },
  {
    level: 19,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "   Hello   ";\nconsole.log(str.trim());',
    answer: "hello"
  },
  {
    level: 20,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.slice(1, 4));',
    answer: "2,3,4"
  },
  {
    level: 21,
    question: "다음 코드의 출력 결과는?",
    code: 'console.log(Math.max(1, 5, 3, 2));',
    answer: "5"
  },
  {
    level: 22,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);',
    answer: "4"
  },
  {
    level: 23,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "Hello";\nconsole.log(str.indexOf("l"));',
    answer: "2"
  },
  {
    level: 24,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.filter(x => x > 3));',
    answer: "4,5"
  },
  {
    level: 25,
    question: "다음 코드의 출력 결과는?",
    code: 'const num = 3.14159;\nconsole.log(num.toFixed(2));',
    answer: "3.14"
  },
  {
    level: 26,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = ["a", "b", "c"];\nconsole.log(arr.indexOf("b"));',
    answer: "1"
  },
  {
    level: 27,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello";\nconsole.log(str.repeat(2));',
    answer: "hellohello"
  },
  {
    level: 28,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.some(x => x > 2));',
    answer: "true"
  },
  {
    level: 29,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "JavaScript";\nconsole.log(str.substring(0, 4));',
    answer: "java"
  },
  {
    level: 30,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 2, 3];\nconsole.log(new Set(arr).size);',
    answer: "3"
  },
  {
    level: 31,
    question: "다음 코드의 출력 결과는?",
    code: 'const obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));',
    answer: "a,b"
  },
  {
    level: 32,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.every(x => x > 0));',
    answer: "true"
  },
  {
    level: 33,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello world";\nconsole.log(str.includes("world"));',
    answer: "true"
  },
  {
    level: 34,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [[1, 2], [3, 4]];\nconsole.log(arr.flat());',
    answer: "1,2,3,4"
  },
  {
    level: 35,
    question: "다음 코드의 출력 결과는?",
    code: 'const num = 123.456;\nconsole.log(Math.round(num));',
    answer: "123"
  },
  {
    level: 36,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.findIndex(x => x > 1));',
    answer: "1"
  },
  {
    level: 37,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello";\nconsole.log(str.padStart(7, "*"));',
    answer: "**hello"
  },
  {
    level: 38,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.find(x => x > 1));',
    answer: "2"
  },
  {
    level: 39,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "JavaScript";\nconsole.log(str.endsWith("Script"));',
    answer: "true"
  },
  {
    level: 40,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, [2, [3]]];\nconsole.log(arr.flat(2));',
    answer: "1,2,3"
  },
  {
    level: 41,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello";\nconsole.log(Array.from(str));',
    answer: "h,e,l,l,o"
  },
  {
    level: 42,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.reduce((a, b) => a * b));',
    answer: "6"
  },
  {
    level: 43,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello world";\nconsole.log(str.split(" ").length);',
    answer: "2"
  },
  {
    level: 44,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [3, 1, 4, 1, 5];\nconsole.log([...new Set(arr)]);',
    answer: "3,1,4,5"
  },
  {
    level: 45,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "JavaScript";\nconsole.log(str.slice(-6));',
    answer: "script"
  },
  {
    level: 46,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.filter(x => x % 2 === 0));',
    answer: "2,4"
  },
  {
    level: 47,
    question: "다음 코드의 출력 결과는?",
    code: 'const str = "hello";\nconsole.log(str.split("").reverse().join(""));',
    answer: "olleh"
  },
  {
    level: 48,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3];\nconsole.log(arr.map(x => x ** 2));',
    answer: "1,4,9"
  },
  {
    level: 49,
    question: "다음 코드의 출력 결과는?",
    code: 'const obj = { x: 1, y: 2 };\nconsole.log(Object.values(obj));',
    answer: "1,2"
  },
  {
    level: 50,
    question: "다음 코드의 출력 결과는?",
    code: 'const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.reduce((a, b) => a + b, 0));',
    answer: "15"
  }
]; 