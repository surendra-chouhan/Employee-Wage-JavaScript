const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_NUMBER_OF_WORKING_DAYS = 20;
const TOTAL_WORKING_HOURS = 100;

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

let totalWorkingHours = 0;
let totalWorkingDays = 0;

while(totalWorkingHours <= TOTAL_WORKING_HOURS && totalWorkingDays < MAX_NUMBER_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalWorkingHours += getempHrs(empCheck);
}
let empWage = totalWorkingHours * WAGE_PER_HOUR;
console.log("Total Hours : " + totalWorkingHours);
console.log("Total Working Days : " + totalWorkingDays);
console.log("Monthly Wage of an employee is : " + empWage);
