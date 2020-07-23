//https://www.codewars.com/kata/56eb0be52caf798c630013c0

//find number of black fridays in a year
//input = number (year)
//output = number (count)

//unluckyDays(2015) == 3

//getDate === 13 && getDay() === 5

const year = 2015;
let blackFridays = 0;

for(let month = 1; month <= 12; month++){
    let date = new Date(`${year} ${month} 13`);
    if(date.getDay() === 5) blackFridays++;
}

console.log('blackFridays', blackFridays);


const unlucky = (year) => {
  let blackFridays = 0;

  //loop through 13th of every month
  for (let month = 1; month <= 12; month++) {
    let date = new Date(`${year} ${month} 13`);

    //if it's a Friday, add to blackFriday
    if (date.getDay() === 5) blackFridays++;
  }

  return blackFridays;
};