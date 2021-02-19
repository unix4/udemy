"use strict";
var Customer03 = /** @class */ (function () {
    function Customer03(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        // The same as this._firstName = _firstName;
    }
    Object.defineProperty(Customer03.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer03.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer03;
}());
// Let's create an instance
var myCustomer03 = new Customer03("Martin", "Dixon");
console.log(myCustomer03.firstName);
console.log(myCustomer03.lastName);
