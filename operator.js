let courses = [
  { name: 'WEE 411', score: 82, units: 3 },
  { name: 'WEE 431', score: 71, units: 2 },
  { name: 'WEE 433', score: 76, units: 3 },
  { name: 'ABE 463', score: 77, units: 2 },
  { name: 'CVE 421', score: 74, units: 4 },
  { name: 'CVE 463', score: 56, units: 3 },
];

courses.forEach (function(course) {
    console.log(course.name + " - " + course.score )
});

let passedCourses = courses.filter(function(check) {
    return check.score >= 70
});
console.log(passedCourses);

let heaviestUnitCourse = courses.find(function(search) {
    return search.units === 4
}); 
console.log(heaviestUnitCourse);

let totalUnits = courses.reduce((acc, current) => acc + current.units ,0);
console.log("Total unit offerred is : " + totalUnits);

let averageScore = courses.reduce((acc, current) => acc + current.score ,0);
console.log(averageScore/courses.length);

let belowSeventy = courses.filter(function(check) {
    return check.score < 70
});
let totalUnitsBelowSeventy = belowSeventy.reduce((acc,current) => acc + current.units,0)
console.log(totalUnitsBelowSeventy);

let courseNames = courses.map(function(names) {
    return names.name
});
console.log(courseNames);

let gradedCourses = courses.map(function(check) {
    if (check.score >= 70) {
        return { name : check.name, grade : 'Pass'};
    } else {
        return { name : check.name, grade : 'Fail'};
    }
}); 

console.log(gradedCourses);

let bigCombo = courses.filter(function(sort) {
    return sort.units >= 3
});

let bigCombo1 = bigCombo.reduce((acc, current ) => acc + current.score, 0);
console.log(bigCombo1/bigCombo.length);

let exercise10 = courses.map(function(gradePoints) {
    return gradePoints.score * gradePoints.units
});
let totalGradePoints = exercise10.reduce((acc, current) => acc + current, 0);
console.log(totalGradePoints);