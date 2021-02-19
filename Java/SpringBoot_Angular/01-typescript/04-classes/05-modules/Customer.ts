"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer05 = void 0;
var Customer05 = /** @class */ (function () {
    function Customer05(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        // The same as this._firstName = _firstName;
    }
    Object.defineProperty(Customer05.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer05.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer05;
}());
exports.Customer05 = Customer05;
