# Aantekeningen [Learn JavaScript](https://learnjavascript.online/)
## Inhoudsopgave
* [String I](#strings-I)
* [Numbers](#numbers)
* [Variables](#variables)
* [Conditions](#conditions)
* [Arrays I](#arrays-I)
* [Arrays II & callbacks](#arrays-ii--callbacks)
* [Objects I](#objects-I)
* [Arrow functions](#arrow-functions)
* [Implicit return](#implicit-return)

## Strings I

* You can create strings with " or '
* .length is a property that gives you the length of a string
* .toUpperCase() is a function that converts the string to upper case
* .toLowerCase() is a function that converts the string to lower case
* parentheses () on function calls are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.
* console.log(...) is used for debugging and is NOT a replacement for return.
* You can rewrite the name = name + in a shorter way using the += operator:
* The only difference is that template strings start and end with a backtick ` character
* Template strings support interpolation! This means you could write a variable in your string, and get its value. The syntax is straightforward, you wrap your variable name with a dollar sign and curly braces. Let's take an example where we have a variable language with a value of JavaScript

```js
let language = "JavaScript";
`I am learning ${language}`; //"I am learning JavaScript";
```
### Chapter Recap
* You can create strings with " or '.
* `.length` is a property that gives you the length of a string.
* `.toUpperCase()` is a function that converts the string to upper case.
* `.toLowerCase()` is a function that converts the string to lower case.
* `parentheses ()` on function calls are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.
* `console.log(...)` is used for debugging and is NOT a replacement for return.
* Square brackets [index] are used to access a specific index from a string.
* The index starts at 0. So the first character is index 0.
* You can combine it with the length of a string to get another character in another position.
* The `.at()` method allows you to read a character at an index (which can also be negative).
* A substring is a part or a portion of a string.
* `string.substring(indexStart, indexEnd)` is used to return a portion of the string.
* `indexStart`: the position of the first character you'd like to include.
* `indexEnd`: the position of the first character you'd like to ignore.
* the indexEnd argument is optional which means you can leave it out.
* The `+` operator is used to add 2 numbers
* The `+` operator is used to concatenate 2 strings
* A template string is a string created with the backtick character: `
* Template strings can span multiple lines
* Template strings support interpolation with the `${variableName}` syntax

## Numbers

* You can represent larger numbers clearer, if you wish, with the numeric separator (_). For example:
* Though rarely used, you can convert a number to a string by calling the `.toString()` method
* If you take a look at online documentation, you will often see `String.prototype.toString().` Why is there a prototype? This is covered in-depth later in this course. For now, every time you see `String.prototype.something()`, it means there is a method something() that you can call on a String
* You may sometimes encounter NaN which stands for Not a Number. For example, if you try to multiply a number by a string (which you should not do):
* Convert from a number to string: `value.toString()`
  * NaN stands for Not a Number
  * NaN is often a sign of a bug.
  * `Number.parseInt()`

* Make sure to always specify the radix to avoid unpleasant surprises

* The radix is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is 10 which represents the way we count numbers in our everyday lives. This system is called the decimal system (because we have 10 fingers, so we use the digits from 0 to 9)

```js
Number.parseInt("123abc", 10); // 123
Number.parseInt("5 meters", 10); // 5
```

Then, we need to multiply this number by 2 (this 2 comes from % 2): 3 * 2 = 6. Finally, the division remainder is 7 - 6 = 1

We'll use the division remainder in 2 chapters from now to check whether a number is even or odd

While there are some other methods you could call on numbers, they are not very commonly used. What is commonly used, however, is the Math object which contains methods such as min(), max(), round(), etc

Where as for 7 % 2:

### Chapter Recap
* Convert from a number to a string: value.toString()
* NaN stands for Not a Number
* NaN is often a sign of a bug.
* Convert from string to number Number.parseInt(value, 10).
* Number.parseInt() is the name of the function you're calling.
* 10 is the radix which you should specify.
* Make sure to always specify the radix to avoid unpleasant surprises.
* The remainder operator (%) returns the division remainder between 2 numbers.

## Variables 
* There are 2 ways to define a variable in JavaScript. Let's take a look at the difference between `let` and `const`
  * Variables defined with let, can be re-assigned later on:
  * The first time you define a variable, you have to prefix it with `let =` . Let's take an example:

```js
let language = "C++";
language = "JavaScript";
```

Variables defined with const cannot be re-assigned. This means you can use the = sign only once when defining the variable. Here's an example:

An important note about const is that it does not create a Constant or an Immutable value. This will be thoroughly explained once we learn about arrays & objects. What you need to know, for now, is that you can only use the equal sign once, but you can still change elements inside an array or object

How do you decide if you're going to use let or const? The general rule is easy. Always go with const, until you realize that you need to be able to re-assign the variable later on, then switch it to let

The benefit of using const is that once a variable is an array, it will always be an array (but as you will see later on, the elements inside the array might change). This allows you to confidently use array methods on that variable because you know it will always be of type array

* When you use a variable for the first time in JavaScript, you need to declare it with either let or const.
* Use let for variables that you will need to re-assign later on (as in changing their value)
* Use const for variables that you won't need to re-assign later on.
* Variables declared with const are not constant. We will see why later in this course.
* Variables declared with const cannot be re-assigned so you cannot have the = next to that variable name after declaring it.
* If you see var, it's from the old version of JavaScript. You can convert it to let (sometimes const if the variable is not re-assigned).

## Conditions 
Conditions in JavaScript have the following blueprint:

```js
const grade = 15;

if (grade >= 10) {
    console.log("Passing grade");
}
```

```js
const grade = 3;

if (grade >= 10) {
    console.log("Passing grade");
} else {
    console.log("Failing grade");
}
```
Several conditions can be checked sequentially using else if. For example:

```js
const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}
```
Since this function is performing two different actions based on the result of the if condition and its opposite (else), then we can rewrite it by dropping the else keyword:

```js
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
```

Always use triple equal === when comparing 2 values in JavaScript

* When you have an if/else condition that returns two different results, it is possible to drop the else keyword.
* Always use triple equals (===) when comparing 2 values in JavaScript.
* This is redundant because grade >= 10 on its own, evaluates to true or false depending on the grade. This means you don't need to wrap it with an if/else statement

When you're returning a boolean from a function, you can simplify your code by returning the boolean expression directly, without using an if statement.

```js
function isPassing(grade) {
    return grade >= 10;
}
```

```js
// even numbers
4 % 2 // 0
6 % 2 // 0
8 % 2 // 0
10 % 2 // 0

// odd numbers
3 % 2 // 1
5 % 2 // 1
7 % 2 // 1
9 % 2 // 1
```

```js
function evenOrOdd(number) {
    return (number % 2 === 0) ? "even" : "odd";
}
```

```js
condition ? expressionWhenTrue : expressionWhenFalse
```

While the ternary operator can make your code more concise, it can also make it less readable. We generally recommend you avoid it and opt for more readable code

## Arrays I
Arrays in JavaScript allow you to store multiple elements in the same variable. You can store numbers, strings, booleans, arrays, objects & more. These can be mixed within the same array

```js
const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed
[].length; // 0
```
```js
const grades = [10, 8, 13, 15];
grades.length; // 4
```

Similarly to strings, you can get an element from an array by using the square bracket syntax [] with the index starting from 0

```js
const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"
const users = ["Sam", "Alex", "Charley", "Blane", "Crane"];
users.at(0); //"Sam"
users.at(1); //"Alex"
users.at(-2); //"Blane"
users.at(-1); //"Crane"
```

You can also use the .at(index) method, which accepts negative indices making it easier to find the last element of the array. Negative indices count back from the last element of the array. Here are some examples with .at():

You can add an element to an array by using the .push() method

```js
const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];
```

As you can see, numbers.push(20) returns 5 which is the length of the array. This is often confusing for a lot of developers which is why we're highlighting it here. .push() will add an item to the array but also return the new length of the array

What's the benefit of declaring it as a const you ask? The benefit is that once you define it as an array, it will always stay as an array which means you can safely call array methods on it. However, the array content can change

```js
const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)
```

Let's say we have an array of grades and you'd like to loop (or iterate) over every item in this array. Here's how you do that in JavaScript:

```js
const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});
```

Always start with a console.log() inside your .forEach so that you can visualize the shift from array to array item

`grades.forEach(insert_callback_here);`

This callback function receives a grade and then logs it to the console. This is a function definition because it's not being executed. It only defines the behavior of the function. However, this function definition is passed as an argument to the .forEach() method:

Once you combine the two together, as in, pass the function definition as an argument to the .forEach() method, then you get:

```js
// this is the callback
function(grade) {
    console.log(grade);
}
// call the callback with grade = 10 (grades[0])
console.log(grade); // will log 10
// call the callback with grade = 8 (grades[1])
console.log(grade); // will log 8
// call the callback with grade = 13 (grades[2])
console.log(grade); // will log 13
```

Naming variables with a clear name makes it much easier for you and others to understand the code. This is especially true with iteration

Thus, it's always a good idea to use the plural for the array and singular for the item of the array

```js
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
}
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
        return true; // does this work as expected?
    });
}
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // or is this the correct way?
}
```

If we take a step back, the return keyword returns from its own function. Thus, the first approach does NOT work. Because you're returning from the callback function that the .forEach() receives. This will NOT return from the logUserIds function

```js
function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // ✅ return from the logUserIds function
}
function logGrades(grades) {
    grades.forEach(function(grade) {
        console.log(grade);
        return 10;
    });
    return 20;
}
```

The function will return 20 because it's returning from the outer function

A callback function is like leaving a phone number for someone to call you back when they're ready. In JavaScript, you provide a callback function as an argument, which is called when the main function is ready to send the result

In the next chapter, we'll learn more about callbacks as well as additional array methods that we'll be using throughout the whole course. These methods will prove to be useful especially once we work with arrays of objects, which are the most common data structure that you get back from APIs

### Chapter Recap
* const data = [1, 2, 3] is an array containing 3 numbers.

* array.length returns the number of elements inside the array.

* array.push(x) allows you to add the variable x to the end of the array. It also returns the new length of the array (after the push has been made).
* Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array.

* .forEach(callback) iterates over every item in an array.
* A callback is a function definition passed as a parameter to another function.
* Always start with a console.log() inside the .forEach() to visualize the shift from array to array item (you can skip that when you become used to it).
* The .forEach() method will take your function definition and call it for every item of the array. Every time the callback is called, the first parameter will represent the corresponding array item.
* Name your arrays in plural and the array item (inside the .forEach()) in singular.
* Make sure to correctly place the return inside a function that contains a .forEach().

## Arrays II & callbacks 
A common array method is the .filter() method. When you call this method on an array, you will get back another array that contains some of the items from the original array, based on the condition you specify. Let's take an example:

```js
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

Don't forget the return keyword inside the callback function

Array.filter(callback)

The .filter() method expects a callback as the first argument. In our example, the callback is:

```js
function(number) {
    return number > 10;
}
```

JavaScript will take your callback and call it for every single item in the array. Our numbers array has 5 items, so it will call it 5 times. Every time that it calls this function, it will give a value to the number parameter that you specified inside this callback

This is how callbacks work. Now every array method has a different behavior which we'll be explaining. This behavior often depends on the result of the callback. In this example, if the callback function returns true, then the item will be included in the final array returned by .filter(). However, if the callback function returns false, then the item will not be included in the final array

```js
numbers.filter(function(number) {
    return true;
});
```

This will return every item in the array. So you will end up getting a copy of the original array. That's because the callback is always returning true. This code is not very useful, but it's to show you the importance of what the callback function returns and how that affects the result of the .filter() method

```js
const years = [2000, 2008, 2020, 2023];

years.filter(function(year) {
    return year >= 2010;
});
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

When you call the .find(callback) method on an array, you will get back the first item that matches the condition that you specify. If no items were found, you will get back undefined

.find(callback)

```js
const numbers = [9, 5, 14, 3, 11];

const firstNumberAboveTen = numbers.find(function(number) {
    return number > 10;
});
console.log(firstNumberAboveTen); // 14
```

The difference has to do with the return type of these 2 methods:

.filter() always returns an array. Even if it matched one item or no items

The .map(callback) method allows you to transform an array into another one. Here are some common examples:

Notice that you always get back an array containing the same number of items compared to the original array, but every item has most likely undergone some transformation

```js
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
const names = ["sam", "Alex"];
const upperNames = names.map(function(name) {
    return name.toUpperCase();
});
```

The array .includes(item) method is one of the simplest array methods as it takes an item rather than a callback and returns true when that item exists in the array and false otherwise. Here's an example:

```js
const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false
```

When you have an array and you render this array to a web page (as we'll see later on in the DOM section of the course), the array will be automatically converted to a string. JavaScript will automatically invoke the .toString() method of the array which returns a string of the array elements separated by commas. Here's how it works:

But there's a downside, which is that you cannot customize the glue that gets inserted in between the array items, which is the comma , character

If you'd like to customize the glue, then you can use the .join(glue) method:

```js
const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"
```

## Objects I
An object is a data type that allows you to group several variables together into one variable that contains keys and values. This is often used to represent or describe an entity. For example, a person, a user, a product, etc

```js
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
```
You can also update a property value using the same dot notation followed by an equal sign:

```js
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}
```
You are able to update the property value of an object defined by const because const does not mean that the variable is a constant, it just means that you cannot re-assign it. Thus, the variable is always an object, but its content (properties) can change

## Arrow functions 
Note: if you're confused by the difference between parameters and arguments, here's a short definition: A parameter is a variable in a function definition. When a function is called, the arguments are the data you pass into the method's parameters

Default parameters allow you to give a default value for one or more parameters that have not been provided when the function is called

```js
function addOne(number = 0) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne(); // 1
function welcomeUser(name = "user") {
    return `Hello ${name}`;
}

welcomeUser("Sam"); // "Hello Sam"
welcomeUser(); // "Hello user"
const sum = (a, b) => {
    return a + b;
}
```

There are multiple ways of writing a function

So the following function:

```js
function sum(a, b) {
    return a + b;
}
```
Can be written as:

```js
const sum = function(a, b) {
    return a + b;
}
```

Now, let's convert that function into an arrow function

You can do that in 2 steps:

remove the function keyword

1. add an arrow (= and >) between the parameters (a, b) and the opening curly brace {

Arrow functions always start with the parameters, followed by the arrow => and then the function body

Array forEach

Here's the .forEach example we saw a few chapters ago:

```js
const grades = [10, 8, 13];

grades.forEach(function(grade) {
    console.log(grade);
});
grades.forEach((grade) => {
    console.log(grade);
});
```

Also, because the arrow function has one parameter (without a default value), you are allowed to drop the parentheses () surrounding the parameter:

```js
grades.forEach(grade => {
    console.log(grade);
});

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

The .filter(callback) can be rewritten as:

```js
const numbersAboveTen = numbers.filter(number => {
    return number > 10;
});
```

## Implicit return 
When you forget to write return in a function in JavaScript, you get an implicit return undefined. The word implicit here means that it is inferred but not specifically expressed. Meaning that there was no return undefined but we end up getting undefined as a result. For example:

However, with arrow functions, you can implicitly return the result of the function on some very specific conditions. Let's start with an example and then we'll explain how we got there:

```js
// this works 👍 (implicit return)
const sum = (a, b) => a + b;

sum(1, 3); // 4
```

* Your function must be an arrow function.
* The function body must be only one statement. This means you must remove the curly braces.
* You must remove the return keyword when the function body is one statement.

```js
const isLegal = (age) => {
    return age >= 18;
}
```

Now let's make use of implicit return by:

`const isLegal = (age) => age >= 18;`

isLegal is a function that takes the age and returns the result of the expression age >= 18.

Only use implicit return when the function body is one line and short. Never sacrifice code readability and clarity in order to use a certain feature

As mentioned in the previous chapter, when you have only one parameter, you are able to drop the parentheses around the parameter. The code above becomes:

`const isLegal = age => age >= 18;`

Array filter(callback)

```js
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

The .filter(callback) can be re-written as follows:

```js
const numbersAboveTen = numbers.filter(number => number > 10);
Array find(callback)

const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

The .find(callback) can be re-written as follows:

```js
const result = names.find(name => name === "Alex");
Array map(callback)

const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
```

The .map(callback) can be re-written as follows:

`const doubled = numbers.map(number => number * 2);`
