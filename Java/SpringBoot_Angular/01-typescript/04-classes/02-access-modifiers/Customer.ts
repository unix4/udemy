class Customer02{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }


}

// Let's create an instance
let myCustomer02 = new Customer02("Martin", "Dixon");

console.log(myCustomer02.firstName);
console.log(myCustomer02.lastName);
