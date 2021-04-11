const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_NUMBER_OF_WORKING_DAYS = 20;

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

let empHrs = 0;
for(let i = 0; i <= MAX_NUMBER_OF_WORKING_DAYS; i++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getempHrs(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours : " + empHrs);
console.log("Monthly Wage of an employee is : " + empWage);
