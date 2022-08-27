export class User {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    comment: string;

    constructor(obj?: any) {
        this.firstName = obj? obj.firstName : '';
        this.lastName = obj? obj.lastName : '';
        this.company = obj? obj.company : '';
        this.email = obj? obj.email : '';
        this.birthDate = obj? obj.birthDate : '';
        this.street = obj? obj.street : '';
        this.zipCode = obj? obj.zipCode : '';
        this.city = obj? obj.city : '';
        this.comment = obj? obj.comment : '';
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            company: this.company,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            comment: this.comment
        }
    }
}