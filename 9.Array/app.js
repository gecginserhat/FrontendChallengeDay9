let value;

const numbers = [43,33,44,55,35,5];

//const numbers2 = new Array(1,2,3,4,5,6);

const langs = ["Python", "Java", "C++", "JavaScript"];
const a = ["Merhaba",22,null,undefined,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];


//Change the any index  
numbers[2] = 1000;

//Index of
value = numbers.indexOf(1000);

//Add element to array - push
numbers.push(2000);

numbers.unshift(3000);
value = numbers;

//throw away the value
numbers.pop();
value = numbers;

//discard the initial value
numbers.shift();
value = numbers;

//throw away a certain part
numbers.splice(0, 3);
value = numbers;

//Reverse
numbers.reverse();
value = numbers;


value = numbers.sort();

//sorting from smallest to largest
value = numbers.sort(function(x,y){
    return x - y; 
});

//sorting from largest to smallest
value = numbers.sort(function(x,y){
    return y - x; 
});


console.log(value);