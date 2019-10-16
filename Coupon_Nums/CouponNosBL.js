/**
* @description : Generate Unique Random coupon numbers upto amount Num
* @param {Num}, user input
* @return {couponsgen,gen_coupons}, returning the Unique coupons generated and the total No.of Random numbers generated to produve required Number of Coupon Nums .
*/
R_Coupon = (Num) => {
    try {
        var gen_coupons = 0 //Counter for total amount of coupons generated
        var coupons = 0 //Counter for only Unique coupons generated
        var couponsgen = [] //List of all Unique Coupons Generated
        while (coupons < Num) { // Run while loop untill the no.of Unique coupons generated equals the required amount
            var generatedNum = parseInt(Math.random() * 100); //Generating random coupons
            if (couponsgen.includes(generatedNum)) { //Check for Duplicate coupons
                console.log(generatedNum, 'repeated');
                gen_coupons += 1
            } else {
                couponsgen.push(generatedNum)//Push the unique coupons into the List
                gen_coupons += 1
                coupons += 1
            }
        }
        console.log(couponsgen, "total no of coupons generated=", gen_coupons)
    } catch (e) {
        console.log(e.name)
        console.log(e.error)
    }
}
module.exports = { R_Coupon }