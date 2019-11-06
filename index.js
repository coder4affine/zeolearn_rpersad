//let

let x = 3;

x = 5;

console.log(x);

// const

{
  const z = 3;
}

{
  const z = 4;
}

console.log(z);

// exception for cost

const obj = { x: 1, y: 2 };

obj.y = 3;

console.log(obj);

// problems of Var

// issue
function foo() {
  console.log("original");
}

foo = function() {
  console.log("hacked");
  return 1;
};

console.log(foo());

// solution
const foo = function() {
  console.log("original");
};

console.log(foo());

// string literal
const fname = "Yagnesh";

const lname = "Modh";

const name = `${fname}'s car`;

console.log(name);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>

// </body>
// </html>

const html =
  "<!DOCTYPE html>" +
  '\n<html lang="en">' +
  "\n<head>" +
  '\n\t<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
  "<title>Document</title>" +
  "</head>" +
  "<body>" +
  "</body>" +
  "</html>";

const html1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

console.log(html1);

// object declaration

const foo = "foo";

var es5_object = {
  classicParameter: foo,
  foo: foo,
  doStuff: function() {
    return "function call";
  }
};

console.log(es5_object.doStuff());
console.log(es5_object.foo);

const es6_object = {
  classicParameter: foo,
  foo,
  doStuff() {
    return "function call";
  }
};

console.log(es6_object.doStuff());
console.log(es6_object.foo);

//class

class Animal {
    xyz = "hello";

    constructor(type = 'animal') {
        this.type = type;
    }

    get type {
        return this._type
    }

    set type(value) {
        this._type = value;
    }

    makeSound() {
        console.log("making animal sound");
    }
}

const a = new Animal();
console.log(a.makeSound());


class Cat extends Animal {
    constructor(props) {
        super(props);
    }

    makeSound() {
        super.makeSound();
        console.log('Meow');
    }
}

const c = new Cat();

console.log(c.makeSound());


// spread operator.

const obj = { x: 1, y: 2 };

obj.z = 3; 

console.log(obj);

const obj1 = { x: 1, y: 2};

const obj2 = { ...obj1, z: 3 };

console.log(obj1);
console.log(obj2);


const alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk = { a: 1, b: 2, c: 3 };

// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.a);
// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.b);
// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.c);


// destructuring 

const { a, b, c } = alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk;

console.log(a);
console.log(b);
console.log(c);

const a = { a: 1, b: 2, c: 3 };

// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.a);
// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.b);
// console.log(alkasdjflkjasflkajflkjaslfkjaslkfjasldfjk.c);


// destructuring 
// alias
const { a: abc, b, c } = a;

console.log(abc);
console.log(b);
console.log(c);


const a = { a: 1, b: 2, c: 3 };

// destructuring 
// alias

// remove property from the object
const { c, ...rest } = a;

console.log(c)

console.log(rest);
console.log(a);

const arr = [1,2,3,4,5];

const arr1 = [ 6, ...arr];

console.log(arr1);

const arr2 = [...arr.slice(0, 2), 6 , ...arr.slice(2)]

console.log(arr2)

const arr = [1,2,3,4,5];

const [ a, ...rest ] = arr;

console.log(a);
console.log(rest)


const people = [
  {
      name: 'Yagnesh',
      gender: 'Male'
  },
  {
      name: 'Rohit',
      gender: 'Male'
  },
  {
      name: 'Virat',
      gender: 'Female'
  },
  {
      name: 'Deepika',
      gender: 'Female'
  },
  {
      name: 'Radhika',
      gender: 'Female'
  }
]

const newPeople = [ { name: 'Priyanka', gender: 'Female'}, ...people];

// console.log(newPeople);

const index = people.findIndex(function(item) {
  return item.name === 'Virat';
})

console.log(index);

const newPeople1 = [
  ...people.slice(0, index),
  { ...people[index], gender: 'Male' },
  ...people.slice(index + 1)
]

console.log(newPeople1)

const people = [
  {
      name: 'Yagnesh',
      gender: 'Male'
  },
  {
      name: 'Rohit',
      gender: 'Male'
  },
  {
      name: 'Virat',
      gender: 'Female'
  },
  {
      name: 'Deepika',
      gender: 'Female'
  },
  {
      name: 'Radhika',
      gender: 'Female'
  }
]

const newPeople = people.map(function(item, index) {
  if(item.name === "Yagnesh") {
      return { ...item, profession: 'trainer'}
  }
  if(item.name === 'Virat') {
      return {...item, gender: 'male', profession: 'cricketer'}
  }
  if(item.gender === 'Male') {
      return { ...item, profession: 'cricketer'}
  }
  if(item.gender === 'Female') {
      return { ...item, profession: 'actor'}
  }
  return item;
})

console.log(newPeople);


class Animal {
  xyz = "hello";

  constructor(type = 'animal') {
      this.type = type;
  }

  get type() {
      return this._type;
  }

  set type(value) {
      this._type = value;
  }

  makeSound() {
      setTimeout(() => { 
          console.log(this.type)   
      }, 1000)
  }
}

let a = new Animal();

console.log(a.makeSound());


const arr = [1,2,3,4,5,6];

// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
// }

const sum = arr.reduce((p, c, i, arr) => p + c, 0);

console.log(sum);

const people = [
  {
      name: 'Yagnesh',
      gender: 'Male'
  },
  {
      name: 'Rohit',
      gender: 'Male'
  },
  {
      name: 'Virat',
      gender: 'Female'
  },
  {
      name: 'Deepika',
      gender: 'Female'
  },
  {
      name: 'Radhika',
      gender: 'Female'
  }
];

console.time("Map loop")

const newPeople = people.map(function(item, index) {
  if(item.name === "Yagnesh") {
      return { ...item, profession: 'trainer'}
  }
  if(item.name === 'Virat') {
      return {...item, gender: 'male', profession: 'cricketer'}
  }
  if(item.gender === 'Male') {
      return { ...item, profession: 'cricketer'}
  }
  if(item.gender === 'Female') {
      return { ...item, profession: 'actor'}
  }
  return item;
})

console.timeEnd("Map loop")


console.time("Reduce loop")
const newPeople1 = people.reduce((previous, current) => {
  if(current.name === "Yagnesh") {
      return [...previous, { ...current, profession: 'trainer'}]
  }
  if(current.name === 'Virat') {
      return [...previous, {...current, gender: 'male', profession: 'cricketer'}]
  }
  if(current.gender === 'Male') {
      return [...previous, { ...current, profession: 'cricketer'}]
  }
  if(current.gender === 'Female') {
      return [...previous, { ...current, profession: 'actor'}]
  }
  return [...previous, current];
}, []);

console.timeEnd("Reduce loop")


const a = null;
  const b = 2;

  const res = a || b;
  const res1 = a && b;

  console.log(res)
  console.log(res1);


  const people = [
    {
        name: 'Yagnesh',
        gender: 'Male'
    },
    {
        name: 'Rohit',
        gender: 'Male'
    },
    {
        name: 'Virat',
        gender: 'Female'
    },
    {
        name: 'Deepika',
        gender: 'Female'
    },
    {
        name: 'Radhika',
        gender: 'Female'
    }
  ];

  

  const groupBy = people.reduce((previous, current) => {
    (previous[current.gender] = previous[current.gender] || []).push(current);
    return previous;
  }, {});

  console.log(groupBy)

//   {
//       male: [],
//       female: []
//   }

const obj = { a: 1, b: 2, c: 3};

const arr = [1,2,3,4,5]

for (const key in obj) {
    console.log(key)
    console.log(obj[key]);
}

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value)
}



const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('p1 success')
  }, 3000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('p2 success')
  }, 2000);
})


const xyz = async () => {
  try {
      const data = await Promise.race([p2, p1]);
      console.log(data)
  } catch (error) {
          console.log(error);
  }
}

console.log(xyz());


//generator

async function abc() {
  await 1;
  await 2;
}

function* xyz() {
  yield 1;
  yield 2;
  return 3
}

const gen = xyz();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

for (const iterator of gen) {
  console.log(iterator);
}

