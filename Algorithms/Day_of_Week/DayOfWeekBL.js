// Day of week
/**
* @description : To return day of week for given date
* @param {d,m,y}, user input
* @return {WDays[d0]}, Returning the Day.
*/
dayOfWeek = (d, m, y) => {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = m + 12 * Math.floor((14 - m) / 12) - 2;
    var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
    WDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(WDays[d0]);
}
module.exports = { dayOfWeek }