export class Order {
    title: string;
    description: string;
    creationDate: number;
    dueDate: number;

    constructor(obj?:any){
        this.title = obj? obj.title : '';
        this.description = obj? obj.description : '';
        this.creationDate = obj? obj.creationDate : '';
        this.dueDate = obj? obj.dueDate : '';

    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            creationDate: this.creationDate,
            dueDate: this.dueDate
        }
    }
}