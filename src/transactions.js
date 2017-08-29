class BankDetails {
    
    constructor(firstName, lastName, mobile, email, balance) { //constructor class containing two arguments
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.balance = balance;
    }
    
   get firstName() {
       
        return this._firstName;
    }
       
   set firstName(value) {
       
        if (value === null) {

                throw new Error('Null Value');

        }       
        else if (typeof value === 'number') {

                throw new Error('"firstName" must be a string');

        }

        this._firstName = value;
   }  

  get lastName() {
       
        return this._lastName;
    }
       
   set lastName(value) {
       
        if (value === null) {

                throw new Error('Null Value');

        }       
        else if (typeof value === 'number') {

                throw new Error('"lasstName" must be a string');

        }

        this._lastName = value;
   }  
    
    
    
    get email() {
       
       return  this._email;
    }
    
   set email(value) {
       
              
        if (value === null) {

                throw new newError('null value');

        } 

        this._email = value;
   }

    get mobile() {
       
        return this._mobile;
    }
       
   set mobile(value) {
       
        if (value === null) {

                throw new Error('Null Value');

        }       
        else if (typeof value !== 'number') {

                throw new Error('"mobile" must be a number');

        }

        this._mobile = value;
   }  

   get balance() {
       
        return this._balance;
    }
       
   set balance(value) {
       
        if (value === null) {

                throw new Error('Null Value');

        }       
        else if (typeof value !== 'number') {

                throw new Error('"balance" must be a number');

        }

        this._balance = value;
   }  
    
    

    //generic method to check account balance
    checkBalance(){
        
        return balance();
    }

    //generic method to withdraw cash from account
    withdrawCash(amount){
        
        let newBalance = 0;
        newBalance = this.balance - amount;
        return  this.balance = newBalance;
    }
    
    //generic method to withdraw cash from account
    depositCash(amount){
      
        let newBalance = 0;
        newBalance = this.balance + amount;
        return  this.balance = newBalance;
    }
    
    numberList() {
        //COMPOSITION
        //COMPOSITION is how we express all our “has a” relationships
        //newNumber is the object and contains properties firstNumber,secondNumber and thirdNumber
        //numberObject is a property of newNumber and has its own properties like x and y
        //Also OBJECTS can have properties and methods.
        let accountRecords = {
        
            firstName: this.firstName,
            lastName: this.lastName,
            mobile: this.mobile,
            email: this.email,
            balance: this.balance,
            monthlyActions: {

                withdrawCash: 10000,
                withdraw: 5000,
                deposit: 40000
            }
            
        }

          return accountRecords;
    }
         
    
}

// INHERITANCE
// Define class Transaction which extends BankDetails
// Transaction inherits from the BankDetails class
class Transaction extends BankDetails {
    
    //POLYMORPHISM  
    // This is an example of polymorphism. The Transaction Class's
    // "checkBalance()"  method overrides that of the BankDetails Class
    //generic method to get product of numbers
    //// Replace the "product" method

    checkBalance(){
        
         return  'your account balance is ' + this.balance;
    }
    
    updateFirstName(name){
        
         return this.firstName = name;
    }

    
    //generic method to pay for dstv sub with a fixed service fee
    payDstvSub(amount){
          
        //ENCAPSULATION
        //the variable object tax cannot be accessed from the outside
        //but the method payDstvSub can be accessed and return the value of the object variable sound
        let tax = 100; //    
    
        return this.balance - amount - tax;//ABSTRACTION happens here because the its only the return value that can be accessed from the outside
    }
    
}

module.exports = Transaction;
