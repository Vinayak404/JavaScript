const Util = require("../Utility/utility");
const input = require("readline-sync");
let num = input.question("Enter the no.of Cards per person:")
Util.deckOfCards(num)