const input = require("readline-sync")
const fs = require("fs")
addressOperations = (jsonFile) => {
    let N = input.questionInt("press \n '1' to edit person \n '2' to add new person \n '3' to delete person \n '4' to search by name\n'5' to print all contacts \n :")
    switch (N) {
        case 1: {
            let i = input.questionInt("Enter the index number of the person:")
            let content = input.questionInt("press \n '1' to edit FirstName \n '2' to edit LastName \n '3' to edit Adress \n '4' to edit City \n '5'to edit PhoneNumber\n:")
            console.log(jsonFile[i].FirstName)
            switch (content) {
                case 1: {
                    let update = input.question("Enter the new FirstName:")
                    console.log(jsonFile[i].FirstName);
                    jsonFile[i].FirstName = update;
                    fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile));
                    break;
                }
                case 2: {
                    let update = input.question("Enter the new LastName:");
                    jsonFile[i].LastName = update;
                    fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
                    break;
                }
                case 3: {
                    let update = input.question("enter new adress:");
                    jsonFile[i].Address = update;
                    fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
                    break;
                }
                case 4: {
                    let update = input.question("enter new City:");
                    jsonFile[i].City = update;
                    fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
                    break;
                }
                case 5: {
                    let update = input.question("enter new PhoneNumber:");
                    jsonFile[i].PhoneNum = update;
                    fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
                    break;
                }
            }
            break;
        }
        case 2: {
            let newPerson = {};
            newPerson.FirstName = input.question("Enter firstName:")
            newPerson.LastName = input.question("Enter LastName:")
            newPerson.Address = input.question("Enter Address:")
            newPerson.City = input.question("Enter City:")
            newPerson.PhoneNum = input.question("Enter PhoneNum:")
            jsonFile.push(newPerson)
            fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
            break;
        }
        case 3: {
            let i = input.question("Enter the index number to delete the contact:")
            jsonFile.pop(i)
            fs.writeFileSync("../adressBook/adressBook.json", JSON.stringify(jsonFile))
            break;
        }
        case 4: {
            let Name = input.question("Enter the First or Last name:")
            jsonFile.forEach(nameInRecord => {
                if (nameInRecord.FirstName.includes(Name) || nameInRecord.LastName.includes(Name))
                    console.log(nameInRecord)
            });
            break;
        }
        case 5: {
            jsonFile.forEach(person => {
                console.log(person)
            });
            break;
        }
    }
}
groceryManagement = (jsonFile) => {
    let N = input.questionInt("press \n '1' to edit Inventory \n '2' to add new Inventory \n '3' to delete Inventory \n '4' to search by name\n'5' to print Inventory \n :")
    switch (N) {
        case 1: {
            let i = input.questionInt("Enter the index of inventory to edit:");
            let property = input.questionInt("Enter '1' to edit name ,'2' to edit quantity or '3'to edit price:");
            switch (property) {
                case 1: {
                    let update = input.question("Enter new name:")
                    jsonFile[i].Name = update;
                    fs.writeFileSync("../groceryInventoryManagement/groceryInventory.json", JSON.stringify(jsonFile))
                    break;
                }
                case 2: {
                    let update = input.question("enter new weight:")
                    jsonFile[i].Weight = update;
                    fs.writeFileSync("../groceryInventoryManagement/groceryInventory.json", JSON.stringify(jsonFile))
                    break;
                }
                case 3: {
                    let update = input.question("Enter new price:")
                    jsonFile[i].price = update;
                    fs.writeFileSync("../groceryInventoryManagement/groceryInventory.json", JSON.stringify(jsonFile))
                    break;
                }
            }
            break;
        }
        case 2: {
            newItem = {}
            newItem.Name = input.question("Enter the name of the new addition:")
            newItem.Weight = input.question("Enter the quatity in kgs:")
            newItem.price = input.question("Enter the price/kg:")
            jsonFile.push(newItem);
            fs.writeFileSync("../groceryInventoryManagement/groceryInventory.json", JSON.stringify(jsonFile))
            break;
        }
        case 3: {
            let i = input.question("Enter the index number to delete the item:")
            jsonFile.pop(i)
            fs.writeFileSync("../groceryInventoryManagement/groceryInventory.json", JSON.stringify(jsonFile))
            break;
        }
        case 4: {
            let Name = input.question("Enter the name:")
            jsonFile.forEach(nameofItem => {
                if (nameofItem.Name.includes(Name))
                    console.log(nameofItem)
            });
            break;
        }
        case 5: {
            jsonFile.forEach(item => {
                asset = parseInt(item.price) * parseInt(item.Weight)
                console.log(item, "Asset =", asset)
            });
            break;
        }
    }
}
regexp = () => {
    const input = require('readline-sync');
    let name = input.question("Enter your name:")
    let fullName = input.question("Enter your full name:")
    let patt = /[a-zA-Z]/;
    //check whether the input is string.
    while (!patt.test(name) || !patt.test(fullName)) {
        name = input.question("Enter your name(alphabets only) : ");
        fullName = input.question("Enter your full name(alphabets only) : ");
    }
    //check whether the input is 10 digit number.
    let mobilenumber = input.question("Entert your 10 digit mobile number:")

    while (isNaN(mobilenumber) || mobilenumber.length != 10) {
        mobilenumber = input.question("\nEnter valid phone number(10 digits only) : ");
    }
    //Replacing name, full name, mobileNumebr, date using regular expressions.
    var fs = require('fs');
    var line = String(fs.readFileSync("../regularExpressionDemonstration/regEx.txt"));
    var date = new Date();
    line = line.replace("<<name>>", name);
    line = line.replace("<<full name>>", fullName);
    line = line.replace("xxxxxxxxxx", mobilenumber);
    line = line.replace("01-01-2016", date.toDateString());
    console.log(line);
}
deckOfCards = (noOfCards) => {
    let suit = ["Clubs", "Diamons", "Hearts", "Spades"];
    let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen", "Ace"];
    let shuffledsuit = suit.sort(() => Math.random() - 0.5)
    let shuffledrank = rank.sort(() => Math.random() - 0.5)
    let cards = []
    shuffledsuit.forEach(suits => {
        shuffledrank.forEach(ranks => {
            cards.push(suits + ' of ' + ranks)
        });

    });
    shuffledCards = cards.sort(() => Math.random() - 0.5)
    let player1 = []
    let player2 = []
    let player3 = []
    let player4 = []
    while (noOfCards--) {
        let newCard1 = shuffledCards.pop();
        player1.push(newCard1);
        let newCard2 = shuffledCards.pop();
        player2.push(newCard2);
        let newCard3 = shuffledCards.pop();
        player3.push(newCard3);
        let newCard4 = shuffledCards.pop();
        player4.push(newCard4);
    }
    console.log(player1, player2, player3, player4)
}
module.exports = {
    addressOperations,
    groceryManagement,
    regexp,
    deckOfCards
}