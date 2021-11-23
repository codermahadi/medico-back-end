import {IWrite} from "../interfaces/IWrite";
import {IRead} from "../interfaces/IRead";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    constructor() {
        console.log("base repository running...");
    }

    create(item: T): Promise<boolean> {
        return Promise.resolve(false);
    }

    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented')

    }

    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented')

    }

    findOne(item: T): Promise<T> {
        throw new Error('Method not implemented')

    }

    update(id: string, item: T): Promise<boolean> {

        throw new Error('Method not implemented')
    }

}
