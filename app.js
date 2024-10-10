/*
    Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we 
    accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a 
    sleep debt calculator.

    The program will determine the actual and ideal hours of sleep for each night of the last week.

    Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

function getSleepHours(day) {
    day = day.toLowerCase();
    let output;
    switch (day) {
        case 'monday':
            output = 7;
            break;
        case 'tuesday':
            output = 7;
            break;
        case 'wednesday':
            output = 8;
            break;
        case 'thursday':
            output = 7;
            break;
        case 'friday':
            output = 7;
            break;
        case 'saturday':
            output = 7;
            break;
        case 'sunday':
            output = 7;
            break;
        default:
            break;
    }
    return output;
}

function getActualSleepHours(){
    return getSleepHours('monday') + getSleepHours('tuesday') + 
    getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday')
    + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours(){
    const idealHours = 7;
    return idealHours * 7;
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours < idealSleepHours) {
        console.log('You slept ' + (idealSleepHours - actualSleepHours) + ' hour/s less than you needed this week, you need to rest.');
    } else if(actualSleepHours > idealSleepHours){
        console.log('You slept ' + (actualSleepHours - idealSleepHours) + ' hour/s more than you needed this week.');
    }else{
        console.log('You slept the recomended hours this week, good job!');
    }
}

calculateSleepDebt();