let value;

const programmer = {
    name : "Serhat Geçgin",
    age : 23,
    email : "serhatgcgn@gmail.com",
    langs: ["Python", "Java", "JavaScript"],

    address : {
        city: "Ankara",
        street : "Bahçelievler"
    },
    work : function () {
        console.log("Programcı Çalışıyor...");
    }
}
value  = programmer;

value = programmer.email;

value = programmer.langs;
value = programmer.address.city;

const programmers = [
    {name : "Serhat Geçgin", age:23},
    {name:"Oğuz",age:25}
];

value = programmers[0].name;


console.log(value);