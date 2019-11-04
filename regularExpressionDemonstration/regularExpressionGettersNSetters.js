class details {
    constructor(name, fullName, phoneNumber) {
        this.name = name;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
    }
    setName(firstName) {
        this.name = firstName;
    }
    setFullname(lastName) {
        this.fullName = lastName;
    }
    setphoneNumber(phNum) {
        this.phoneNumber = phNum
    }
    getFirstName() {
        return this.name;
    }
    getLastName() {
        return this.fullName;
    }
    getPNum() {
        return this.phoneNumber;
    }
}
module.exports = {
    details
}