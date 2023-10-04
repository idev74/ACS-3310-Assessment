import { error } from "console";

// Import external libraries and data
const DateIt: any = require('date-it'); // Import the 'Date It' library
const stringIt = require('string-it-on'); // Import the 'String it on' library
const data = require('./data.json'); // Import data from the data JSON file

// Define the interface for the 'DataItem' object
interface DataItem {
  id: number;
  first_name: string;
  last_name: string;
  purchased: string;
  lastpayment: string;
  phone: string;
}

// Function to capitalize the first letter of each word in the full name
function challengeOne(): void {
  data.forEach((element: DataItem) => {
    const fullName: string = `${element.first_name} ${element.last_name}`;
    console.log(stringIt.capitalizeWords(fullName));
  });
}

// Function to format and display the 'purchased' date
function challengeTwo(): void {
  data.forEach((element: DataItem) => {
    const date: typeof DateIt = new DateIt(element.purchased);
    console.log(`Purchased: ${date.format('M d, Y')}`);
  });
}

// Function to calculate and display the time since the last payment
function challengeThree(): void {
  data.forEach((element: DataItem) => {
    const lastPayment: typeof DateIt = new DateIt(element.lastpayment);
    const length: string = lastPayment.when();
    console.log(`Last Payment: ${length}`);
  });
}

// Function to format and display the phone numbers
function challengeFour(): void {
  data.forEach((element: DataItem) => {
    const phone: string = element.phone;
    if (element.phone === null || element.phone.length !== 10) {
      // If the phone number is invalid, log an error message
      error('Invalid phone number');
    } else {
      // If the phone number is valid, format and display it
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
