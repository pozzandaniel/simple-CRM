export class Order {
    title: string;
    description: string;
    creationDate: number;
    dueDate: number;
    id: string;

    constructor(obj?:any){
        this.title = obj? obj.title : '';
        this.description = obj? obj.description : '';
        this.creationDate = obj? obj.creationDate : '';
        this.dueDate = obj? obj.dueDate : '';
        this.id = obj? obj.id : '';

    }

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            creationDate: this.creationDate,
            dueDate: this.dueDate,
            id: this.id
        }
    }
}