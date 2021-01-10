// Write your solution in this file!

// declare customerName as bob in global scope using var keyword
var customerName = 'bob';

// write function upperCaseCustomerName() that accesses customerName variable and makes it uppercase ('BOB');
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
    
// write function setBestCustomer() that when called declares a variable called bestCustomer in global scope and 
//assigns it to ('not bob');
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// write function overwriteBestCustomer() that changes bestCustomer variable to equal ('maybe bob');
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// declare a constant in global scope leastFavoriteCustomer and assign it some initial value
// write a function changeLeastFavoriteCustomer() that attempts to change that constant 
// notice what javascript does when you try to change the constant - throw('Assignment to constant variable.');
const leastFavoriteCustomer = 'tom';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'sam';
}
