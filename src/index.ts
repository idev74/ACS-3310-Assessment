import { error } from "console";

const DateIt: any = require('date-it')
const stringIt = require('string-it-on')
const data = require('./data.json')

interface DataItem {
    id: number;
    first_name: string;
    last_name: string;
    purchased: string;
    lastpayment: string;
    phone: string;
  }
  
  function challengeOne(): void {
    data.forEach((element: DataItem) => {
      const fullName: string = `${element.first_name} ${element.last_name}`;
      console.log(stringIt.capitalizeWords(fullName));
    });
  }
  
  function challengeTwo(): void {
    data.forEach((element: DataItem) => {
      const date: typeof DateIt = new DateIt(element.purchased);
      console.log(`Purchased: ${date.format('M d, Y')}`);
    });
  }
  
  function challengeThree(): void {
    data.forEach((element: DataItem) => {
      const lastPayment: typeof DateIt = new DateIt(element.lastpayment);
      const length: string = lastPayment.when();
      console.log(`Last Payment: ${length}`);
    });
  }
  
  function challengeFour(): void {
    data.forEach((element: DataItem) => {
      const phone: string = element.phone;
      if (element.phone === null || element.phone.length !== 10) {
        error('Invalid phone number');
      } else {
        const phoneArray: string[] = phone.split('');
        const areaCode: string = phoneArray.slice(0, 3).join('');
        const firstThree: string = phoneArray.slice(3, 6).join('');
        const lastFour: string = phoneArray.slice(6, 10).join('');
    
        console.log(`(${areaCode}) ${firstThree}-${lastFour}`);
      }

    });
  }  

module.exports = {
    challengeOne,
    challengeTwo,
    challengeThree,
    challengeFour
}
