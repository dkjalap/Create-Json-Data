const fs = require("fs");

// Kuch first aur last names ka array
const firstNames = ["Yash","Sanjeev","Aarav", "Vihaan", "Reyansh", "Ayaan", "Krishna", "Arjun", "Saanvi", "Diya", "Anaya", "Myra"];
const lastNames = ["Verma", "Kumar", "Gupta", "Mehta", "Singh", "Sharma", "Agarwal", "Chopra", "Jain", "Kapoor"];

// Cities ka array
const cities = ["Ganganagr","Jaipur" ,"Kota" ,"Delhi", "Mumbai", "Chennai", "Kolkata", "Pune", "Hyderabad", "Bangalore", "Lucknow"];

let persons = [];

for (let i = 1; i <= 100000; i++) {
  // Random name
  let first = firstNames[Math.floor(Math.random() * firstNames.length)];
  let last = lastNames[Math.floor(Math.random() * lastNames.length)];
  let fullName = `${first} ${last}`;

  persons.push({
    id: i,
    name: fullName,
    age: Math.floor(Math.random() * 60) + 18,   // 18-78
    email: `${first.toLowerCase()}${i}@example.com`, 
    city: cities[Math.floor(Math.random() * cities.length)]
  });
}

// JSON file create
fs.writeFileSync("persons.json", JSON.stringify(persons, null, 2), "utf-8");

console.log(" persons.json with 10000 unique names created!");
