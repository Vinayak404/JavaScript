const dow = require('../../Algorithm problems/Algorithms/Day_of_Week/DayOfWeekBL')
const LY = require('../../Functional/Leap_year/Leap_yearBL')
const cal = require('../2D_arrayCal/arrayCalBl')
let m = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);
if (0 < m <= 12 && 0 < y <= 9999) {
    d0 = dow.dayOfWeek(1, m, y);
}
if (LY.Leap_yr(y) && m == 2) {
    md = 29
}
else if (!LY.Leap_yr(y) && m == 2) {
    md = 28
}
else if ([1, 3, 5, 7, 8, 10, 12].includes(m)) {
    md = 31
}
else if ([4, 6, 9, 11].includes(m)) {
    md = 30
}
data = cal.getCal(d0, md);
data.forEach(element => {
    str = "";
    element.forEach(el => {
        str = str + el + ' ';
    })
    console.log(str, '\n');
});