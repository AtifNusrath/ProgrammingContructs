//UC1
const IS_ABSENT=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT){
    console.log("Employee is ABSENT");
}
else{
    console.log("Employee is PRESENT");
}

//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGEE_PER_HOUR=20;

let empHrs;
switch (empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;    
    
}

let empWage=empHrs * WAGEE_PER_HOUR;
console.log("Emp Wage: "+empWage);

//UC3
function getWorkingHours(eCheck){
    switch (eCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;       
    }
}
let eCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(eCheck);
empWage=empHrs*WAGEE_PER_HOUR;
console.log("Hours: "+empHrs+" Emp Wage: "+empWage);