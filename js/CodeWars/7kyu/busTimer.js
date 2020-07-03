//https://www.codewars.com/kata/5736378e3f3dfd5a820000cb

//bus come every 15 mins, starts at 6:00, ends at 00:00
//need 5 mins to get to bus stop
//how much minutes until next bus arrives?

//input = string in 00:00 format
//output = number

//XX:15, XX:30, XX:45, XX:00

function busTimer(time) {
  if (time === "23:55") return 0;
  let [hour, min] = time.split(":").map((x) => parseInt(x));
  //add prep time of 5 mins
  min += 5;

  //adjust time
  if (min >= 60) {
    hour += 1;
    min -= 60;
    if (hour === 24) hour = 0;
  }

  if (hour < 6) {
    return (6 - hour) * 60 - min;
  } else {
    return min % 15 ? 15 - (min % 15) : 0;
  }
}
