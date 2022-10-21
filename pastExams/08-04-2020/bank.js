
class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [

        ];

    }

    newCustomer(customer) {

        for (let obj of this.allCustomers) {
            if (JSON.stringify(obj) === JSON.stringify(customer)) {
                throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
            }
        }

        this.allCustomers.push(customer);
        return customer;

    }

    depositMoney(personalId, amount) {

        for (let customer of this.allCustomers) {
            if (customer.personalId === personalId) {

                if (customer.hasOwnProperty('totalMoney') === false) {
                    customer.totalMoney = 0;
                }

                if (!customer.hasOwnProperty('transactions')) {
                    customer.transactions = [];
                }

                let numberOfTransaction = customer.transactions.length + 1;
                customer.totalMoney += amount;

                let newObj = {
                    operationNum: numberOfTransaction,
                    type: 'deposit',
                    amount: amount,
                }

                customer.transactions.unshift(newObj);

                return `${customer.totalMoney}$`

            }
        }

        throw new Error("We have no customer with this ID!");

    }

    withdrawMoney(personalId, amount) {

        for (let customer of this.allCustomers) {
            if (customer.personalId === personalId) {

                if (!customer.hasOwnProperty('totalMoney')) {
                    throw Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
                }

                if (customer.totalMoney < amount) {
                    throw Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
                }

                let numberOfTransaction = customer.transactions.length + 1;
                customer.totalMoney -= amount;

                let newObj = {
                    operationNum: numberOfTransaction,
                    type: 'withdraw',
                    amount: amount,
                }

                customer.transactions.unshift(newObj);

                return `${customer.totalMoney}$`

            }
        }

        throw new Error("We have no customer with this ID!");

    }

    customerInfo(personalId) {

        for (let customer of this.allCustomers) {
            if (customer.personalId === personalId) {

                let result = `Bank name: ${this._bankName}\n`;
                result += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
                result += `Customer ID: ${personalId}\n`;
                result += `Total Money: ${customer.totalMoney}$\n`;

                result += 'Transactions:\n'

                for (let transaction of customer.transactions) {
                    let variable = transaction.type === 'deposit' ? 'made deposit of' : 'withdrew';

                    result += `${transaction.operationNum}. ${customer.firstName} ${customer.lastName} ${variable} ${transaction.amount}$!\n`;

                }

                result = result.trim();
                return result;

            }
        }

        throw new Error("We have no customer with this ID!");


    }


}

let testBank = new Bank('MMC Bank');

console.log(testBank.newCustomer({
    firstName: 'Aleksandar',
    lastName: 'Malinov',
    personalId: 1,
}))

console.log(testBank.newCustomer({
    firstName: 'test',
    lastName: 'testovw',
    personalId: 2,
}))



// console.log(testBank.newCustomer({
//     firstName: 'Aleksandar',
//     lastName: 'Malinov',
//     personalId: 1,
// }))  < --- throws an error;

for (let customer of testBank.allCustomers) {
    console.log(customer);
}

console.log(testBank.depositMoney(1, 2000))
console.log(testBank.depositMoney(1, 4500))
// console.log(testBank.depositMoney(404, 4500))  <--- error

for (let customer of testBank.allCustomers) {
    console.log(customer);

    if (customer.hasOwnProperty('transactions')) {
        for (transaction of customer.transactions) {
            console.log(transaction)
        }
    }

}

// console.log(testBank.withdrawMoney(1, 10000))
// console.log(testBank.withdrawMoney(2, 15000))
// console.log(testBank.withdrawMoney(3, 15000))

console.log(testBank.withdrawMoney(1, 1000))

for (let customer of testBank.allCustomers) {
    console.log(customer);

    if (customer.hasOwnProperty('transactions')) {
        for (transaction of customer.transactions) {
            console.log(transaction)
        }
    }

}


console.log(testBank.customerInfo(1))

console.log('*'.repeat(15))
console.log('SoftUni test input')
console.log('*'.repeat(15))

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

