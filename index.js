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



