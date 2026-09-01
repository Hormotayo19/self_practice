// ARRAY
//forEach method

let studentsName = ['Iqbal', 'Omotayo', 'Busari', 'Oluwatosin', 'Aduramigba' ]

studentsName.forEach (function(studentsName) {
    console.log("my students name include: " + studentsName )
});


// Map method -- creates a new Array by tranforming each item in the array

let price = [ 30000, 256789000, 1234890 ]
let discountedPrice = price.map(function(price) {
    return price * 1.23;
});

console.log(discountedPrice);

// filter method -- creates an array that matches the set condition

let scores = [ 82, 71, 76, 77, 74, 56, 80, 61, 80, 85];
let passingScore = scores.filter(function(scores) {
    return scores >= 70
});

console.log(passingScore);

// find method -- returns the first item that matches a search/condition. 

let courses = [
    {name : 'WEE 411', score : 82 },
    {name : "WEE 431", score : 71 },
    {name : "WEE 433", score : 76 },
    {name : "ABE 463", score : 77 },
    {name : "CVE 421", score : 74 },
    {name : "CVE 463", score : 56 },
];

let topScore = courses.find(c => c.score > 75 ); // why the need for c = c.course ? c => is a call back the find() doesn't know what to look for, the call back function tells it what to look for. 
console.log(topScore);

// reduce method 
let itemPrice = [2000, 15000, 4500, 30000, 135460 ];
let totalPrice = itemPrice.reduce((acc, current) => acc + current,0);
console.log(totalPrice);

//objects
let studentInfo = {
    name : "Busari Iqbal Omotayo",
    class : "500L",
    age : 22,
    dept : "civil engineering",
    isEnrolled : "true"
};

console.log(studentInfo.age);