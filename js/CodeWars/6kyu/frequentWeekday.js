//https://www.codewars.com/kata/56eb16655250549e4b0013f4

let year = 328;

let weekdays = {};
let day = 1;
let date = new Date(year, 0, day);

//loop from beginning of year to end of year
while(date.getFullYear() <= year){
    //record date.getDay() in object and count frequency
    weekdays[date.getDay()] = ++weekdays[date.getDay()] || 1;
    day += 1;
    date = new Date(year, 0, day)
}

let result = [];
let mostFrequent = Math.max(...Object.values(weekdays));
//check for weekdays
for(let weekday in weekdays){
    if (weekdays[weekday] == mostFrequent) {
        switch (weekday) {
            case '1': result.push('Monday'); break;
            case '2': result.push('Tuesday'); break;
            case '3': result.push('Wednesday'); break;
            case '4': result.push('Thursday'); break;
            case '5': result.push('Friday'); break;
            case '6': result.push('Saturday'); break;
        }
    }
}

//add sunday last
if (weekdays[0] == mostFrequent) result.push('Sunday');

function mostFrequentDays(year) {
    //create empty hash table
    let weekdays = {};

    //initiate date
    let day = 1;
    let date = new Date(year, 0, day);

    //loop from beginning of year to end of year
    while (date.getFullYear() <= year) {
        //record date.getDay() in object and count frequency
        weekdays[date.getDay()] = ++weekdays[date.getDay()] || 1;
        day += 1;
        date = new Date(year, 0, day)
    }

    let result = [];
    let mostFrequent = Math.max(...Object.values(weekdays));
    //check for weekdays
    for (let weekday in weekdays) {
        if (weekdays[weekday] == mostFrequent) {
            switch (weekday) {
                case '1':
                    result.push('Monday');
                    break;
                case '2':
                    result.push('Tuesday');
                    break;
                case '3':
                    result.push('Wednesday');
                    break;
                case '4':
                    result.push('Thursday');
                    break;
                case '5':
                    result.push('Friday');
                    break;
                case '6':
                    result.push('Saturday');
                    break;
            }
        }
    }

    //add sunday last
    if (weekdays[0] == mostFrequent) result.push('Sunday');

    return result;
}


console.log(result);


//find Math.max of weekday object values
