let value;

//Converting data types to string

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () { console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3.14).toString();

//Converting data types to numbers

value = Number("123");
value = Number("3.14");
value = Number(true);
value = Number(false);
value = Number(null);
value = Number(function () { console.log()});

value = Number("3.14");
value = parseFloat("3.14");

value = parseInt("3");


const a = Number("34") + 34;
console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);