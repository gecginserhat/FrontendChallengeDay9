const name = "Serhat Geçgin";
const department = "Software Engineer";
const salary = 5000;

//const a = "Name: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

const a = `Name:${name}\nDepartment:${department}\nSalary:${salary}`;


function b() {
    return "Merhaba";
}
const html = `
            <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${b()}</li>
            </ul>
            `;
document.body.innerHTML = html;






















console.log(a);