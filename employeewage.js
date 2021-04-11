const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_NUMBER_OF_WORKING_DAYS = 20;
const TOTAL_WORKING_HOURS = 100;
var dailyWage = [];

function getempHrs(empCheck){
    switch (empCheck) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateWage(totalWorkingHours){
    return totalWorkingHours * WAGE_PER_HOUR;
}

let empWage = 0;
function sum(dailyWage){
    return empWage += dailyWage;
}

let daysCounter = 0;
function dayCount(dailyWage) {
    daysCounter++;
    return daysCounter + " = " + dailyWage;
}

function getFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

function getPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empHrs = 0;

while(totalWorkingHours <= TOTAL_WORKING_HOURS && totalWorkingDays < MAX_NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getempHrs(empCheck);
    totalWorkingHours += getempHrs(empCheck);
    dailyWage.push(calculateWage(empHrs));
}

dailyWage.forEach(sum);

let mapWage = dailyWage.map(dayCount);
console.log(mapWage);

console.log("Daily Wage is : " + dailyWage);
console.log("Total Hours : " + totalWorkingHours);
console.log("Total Working Days : " + totalWorkingDays);
console.log("Monthly Wage of an employee is : " + empWage);

let fulltimewage = mapWage.filter(getFullTimeWage);
console.log("Days where it is Full time : ");
console.log(fulltimewage);

console.log("Day where it is full time : " + mapWage.find(getFullTimeWage));

console.log("Check all element having Full time : " + fulltimewage.every(getFullTimeWage));

console.log("Check Part Time Wage : " + mapWage.some(getPartTimeWage));
