const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const myApp = require('../src/transactions.js');
let Transaction = myApp;

describe("Bank Details", () => {
    
    describe("#constructor", () =>{
        
        let transactionObject;
              beforeEach(() => {

                  transactionObject = new Transaction('Jacob','Penny',080234563,'jacob@yahoo.com',4000);

              });

        it('returns invalid number of arguments', () => {

            () => {

                if(transactionObject.firstName === null || transactionObject.lastName === null || transactionObject.mobile === null || transactionObject.email === null || transactionObject.balance === null){

                   should.throw(Error);

                }

            }


        });
        
  });

        describe("#firstName and #lastName", () =>{
        
          let transactionObject;
              beforeEach(() => {

                //create a new Arithemetic object before every test
                  transactionObject = new Transaction('John','Amadi',0802345631,'amadi@yahoo.com',30000);

              });

        it('returns the firstName', () => {

            transactionObject.firstName = 'John';
            transactionObject.firstName.should.equal('John');

        });

        it('returns the lastName', () => {

            transactionObject.lastName = 'Amadi';
            transactionObject.lastName.should.equal('Amadi');

        });

        it('#firstName can be changed', () => {

            transactionObject.firstName = 'Emeka';
            transactionObject.firstName.should.equal('Emeka');

        });

        it('#lastName can be changed', () => {

            transactionObject.lastName = 'Okoli';
            transactionObject.lastName.should.equal('Okoli');

        });

        it('#firstName only accepts string value', () => {

            () => {

                transactionObject.firstName = 100;
                should.throw(Error);
            }

         });

         it('#lastName only accepts string value', () => {

            () => {

                transactionObject.lastName = 150;
                should.throw(Error);
            }


        });

  });   


    describe("#mobile", () =>{
    
        let transactionObject;
              beforeEach(() => {
                  
                   //create a new Arithemetic object before every test
                  transactionObject = new Transaction('Jacob','Penny',08023456543,'jacobyahoo@yahoo.com',4000);

              });

        it('returns the mobile', () => {

            transactionObject.mobile = 08023456543;
            assert.equal(transactionObject.mobile,08023456543);

        });

        it('can be changed', () => {

            transactionObject.mobile = 07023456543;
            assert.equal(transactionObject.mobile,07023456543);

        });

        it('only accepts numerical value', () => {

            () => {

                transactionObject.mobile = 'string';
                should.throw(Error);
            }


        });
    
  }); 
    
    
    describe("#Inheritance and #Abstraction", () =>{
      let transactionObject;
          beforeEach(() => {
              
              //create a new Arithemetic object before every test
              transactionObject = new Transaction('Jacob','Alao',0802345631,'jacob@yahoo.com',20000);
              
          });
        
        it('should return 8000  after caling withdrawCash method', () => {
        
        transactionObject.balance = 20000;
        transactionObject.withdrawCash(12000).should.equal(8000);
        
        });
            
        it('should return 28000 after caling depositCash method', () => {
        
        transactionObject.balance = 30000;
        assert.equal(transactionObject.depositCash(8000),38000);
        
        });
            
      });

    describe("#Encapsulation", () =>{
      let transactionObject;
          beforeEach(() => {
              
              //create a new Arithemetic object before every test
              transactionObject = new Transaction('Jacob','Alao',0802345631,'jacob@yahoo.com',20000);
              
          });
        
        it('should return 9900  after caling payDstvSub method', () => {
        
        transactionObject.balance = 24000;
        transactionObject.payDstvSub(14000).should.equal(9900);
        
        });
            
            
      });

    describe("#Polymorphism", () =>{
      let transactionObject;
          beforeEach(() => {
              
              //create a new Arithemetic object before every test
              transactionObject = new Transaction('Jacob','Alao',0802345631,'jacob@yahoo.com',20000);
              
          });
        
        it('#firstName can be changed', () => {

            transactionObject.firstName = 'Emeka';
            transactionObject.firstName.should.equal('Emeka');

        });

        it('#lastName can be changed', () => {

            transactionObject.lastName = 'Okoli';
            transactionObject.lastName.should.equal('Okoli');

        });

        it('should return your account balance is 24000  after caling checkbalance method', () => {
        
        transactionObject.balance = 24000;
        transactionObject.checkBalance().should.equal('your account balance is ' + 24000);
        
        });

        it('should return 9900  after caling payDstvSub method', () => {
        
        transactionObject.firstName = 'Jack';
        transactionObject.updateFirstName('Mary').should.equal('Mary');
        
        });
            
            
      });

    describe("#Composition", () =>{
      let transactionObject;
          beforeEach(() => {
              
              //create a new Transaction object before every test
              transactionObject = new Transaction('Mary','Daniels',08023456312,'mary@yahoo.com',24000);
              
          });
        
        it('should return an array  after caling the object accountRecords', () => {
        
        transactionObject.balance = 23000;
        assert.deepEqual(transactionObject.numberList(),{
          firstName: 'Mary',
          lastName: 'Daniels',
          mobile: 08023456312,
          email: 'mary@yahoo.com',
          balance: 23000,
          monthlyActions: { withdrawCash: 10000, withdraw: 5000, deposit: 40000 } });
        
        });
            
            
      });


});