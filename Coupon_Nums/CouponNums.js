/********************************************************************************************************************
* @Execution : default node : cmd> CouponNums.js
* @Purpose : to study the functionals working.
* @description :Generate Unique Random coupon numbers upto amount Num.
* @overview : Generate Random unique coupons.
* @author : Vinayaka S V <vinayakavastrad@gmail.com>
* @version : 1.0
* @since : 12-October-2019
*******************************************************************************************************************/
const Coupon_Nos = require('../Coupon_Nums/CouponNosBL')
let input = require('readline-sync')
let Num = input.question("Enter the no of coupons required:")
Coupon_Nos.R_Coupon(Num)