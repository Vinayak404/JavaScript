/********************************************************************
 * @Execution    : deckOfCards.js
 * @description  : to return the grocery list in stock and its total value
 * @overview     : Object oriented program
 * @file         : deckOfCards
 * @author       : Vinayaka S V<vinayakavastrad@gmail.com>
 * @version      : v12.10.0
 * @since        : 29-oct-2019
 *
 *********************************************************************/
try {
    const Util = require("../Utility/utility");
    const input = require("readline-sync");
    let num = input.question("Enter the no.of Cards per person:")
    Util.deckOfCards(num)
} catch (e) {
    console.log(e.message)
}