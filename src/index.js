const DateIt = require('date-it')
const stringIt = require('string-it-on')
const data = require('./data.json')

function challengeOne() {
    data.forEach((element) => {
        const fullName = `${element.first_name} ${element.last_name}`
        console.log(stringIt.capitalizeWords(fullName))
    });
}

function challengeTwo() {
    data.forEach((element) => {
        const date = new DateIt(element.purchased)
        console.log(`Purchased: ${date.format('M d, Y')}`)
    })
}

function challengeThree() {
    data.forEach((element) => {
        const lastPayment = new DateIt(element.lastpayment)
        const length = lastPayment.when()
        console.log(`Last Payment: ${length}`)
    })
}

function challengeFour() {
    data.forEach((element) => {
        const phone = element.phone.toString();
        const phoneArray = phone.split('');
        const areaCode = phoneArray.slice(0, 3).join('');
        const firstThree = phoneArray.slice(3, 6).join('');
        const lastFour = phoneArray.slice(6, 10).join('');

        console.log(`(${areaCode}) ${firstThree}-${lastFour}`);
    });
}