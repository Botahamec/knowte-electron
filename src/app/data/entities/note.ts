import * as moment from 'moment'
import * as nanoid from 'nanoid';

export class Note{
    constructor(public title: string, public notebookId: string) {
    }

    public id: string = nanoid();
    public isMarked: boolean = false;
    public creationDate: number = moment().valueOf();
    public modificationDate: number = moment().valueOf();
    public isOpen: boolean = false;
    public text: string = "";
    public displayModificationDate: string;
}