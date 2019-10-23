getCal = (d0, md) => {
    try {
        let matrix = [];
        matrix.push(["sun", "mon", "tue", "wed", "thu", "fri", "sat"]);
        let k = 1;
        for (i = 1; i < 7; i++) {
            let date = [];
            for (j = 0; j < 7; j++) {
                if (k <= md && j >= d0) {
                    if (k > 9) date.push(k + ' ');
                    else date.push(' ' + k + ' ');
                    k++;
                    d0 = d0 - 7;
                } else date.push('   ');
            }
            matrix.push(date);
        }
        return matrix;
    }
    catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
}
module.exports = { getCal }

