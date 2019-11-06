//computer is the parent class and children classes are extended from it as shown below
class computer {
    constructor() {}

    say() {
        throw new Error("Method 'say()' must be implemented.");
    }
}
class PC extends computer {
    say() {
        console.log("==============");
        console.log("The pc information is");
        console.log("RAM = 2GB", "HDD = 1TB", "CPU = i5/2.8GHz");
    }
}
class laptop extends computer {
    say() {
        console.log("==============");
        console.log("The laptop information is");
        console.log("RAM = 4GB", "HDD = 500GB", "CPU = i3/2.4GHz");
    }
}

class Server extends computer {
    say() {
        console.log("==============");
        console.log("The server information is");
        console.log("RAM = 16GB", "HDD = 1TB", "CPU = 2.8GHz");
    }
}
module.exports = {
    computer,
    PC,
    laptop,
    Server
}