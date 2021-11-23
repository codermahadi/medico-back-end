import {IWrite} from "../interfaces/IWrite";
import {IRead} from "../interfaces/IRead";
import Riak from "basho-riak-client";
const {riakNodes} = require('../../config');

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    public readonly _riakClient: any;
    constructor() {
        this._riakClient = new Riak.Client([riakNodes], function (err, c) {
            console.log("Rick Client running...");
        })
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

    findOne(id: T): Promise<T> {
        throw new Error('Method not implemented')

    }

    update(id: string, item: T): Promise<boolean> {

        throw new Error('Method not implemented')
    }

}
