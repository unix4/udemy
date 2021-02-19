// Use tsc --init to create a tsconfig file!!!

class Customer03{
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
let myCustomer03 = new Customer03("Martin", "Dixon");


console.log(myCustomer03.firstName);
console.log(myCustomer03.lastName);
