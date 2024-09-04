let value;
const firstName = "Serhat";
const lastName = "Geçgin";

const langs = "Java, Python, C++";


value =  firstName + lastName;
value = firstName + "" + lastName;

value = "Serhat Geçgin";

value += "Software"; // value + value + "Software";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Software");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[1];
value = firstName[firstName.length - 1];

//Index of
value = firstName.indexOf("S");
value = firstName.indexOf("a");


//Char at
value = firstName.charAt(2);
value = firstName.charAt(firstName.length - 1);


//Split
value = langs.split(",");

//Replace
value = langs.replace("Python","CSS");

//Includes
value = langs.includes("Java");
value = langs.includes("JavaScript")


console.log(value);








