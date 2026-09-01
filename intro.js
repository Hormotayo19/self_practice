const employees = [
  {
    id: 1,
    name: "John Smith",
    age: 28,
    department: "Engineering",
    salary: 75000,
    active: true,
    skills: ["JavaScript", "React", "Node.js"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    age: 32,
    department: "Marketing",
    salary: 68000,
    active: true,
    skills: ["SEO", "Content Marketing", "Analytics"]
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 41,
    department: "Finance",
    salary: 82000,
    active: true,
    skills: ["Accounting", "Excel", "Financial Analysis"]
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 26,
    department: "Human Resources",
    salary: 62000,
    active: false,
    skills: ["Recruitment", "Communication", "Employee Relations"]
  },
  {
    id: 5,
    name: "David Wilson",
    age: 35,
    department: "Sales",
    salary: 71000,
    active: true,
    skills: ["Negotiation", "CRM", "Customer Relations"]
  }
]

let employee = employees.every(function(check) {
  return check.salary >= 60000
});

let dept = employees.map(function(extract) {
  return extract.department
});
let check = dept.includes("Legal");

const bySalaryDesc = [...employees].sort(function(a, b) {
  return b.salary - a.salary;
});

let products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true, tags: ["tech", "office"] },
  { id: 2, name: "Desk Chair", price: 250, category: "Furniture", inStock: true, tags: ["office", "comfort"] },
  { id: 3, name: "Headphones", price: 80, category: "Electronics", inStock: false, tags: ["tech", "audio"] },
  { id: 4, name: "Standing Desk", price: 450, category: "Furniture", inStock: true, tags: ["office"] },
  { id: 5, name: "Monitor", price: 300, category: "Electronics", inStock: false, tags: ["tech"] }
];

let no1 = products.map(function(list) {
  return list.name 
})
console.log(no1);

let no2 = products.filter(function(list) {
  return list.inStock === true;
});
console.log(no2);

let no3 = products.find(function(list) {
  return list.name === "Monitor";
});
console.log(no3);

let no4 = products.findIndex(function(look) {
  return look.name === "Standing Desk";
});

let no5 = products.reduce((acc, current) => acc + current.price, 0);
console.log(no5);

console.log('this is a new pratice on merging and branching');