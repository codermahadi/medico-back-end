import nano from 'nano';
import {IWrite} from "../interfaces/IWrite";
import {IRead} from "../interfaces/IRead";
// import Riak from "basho-riak-client";
const {riakNodes, couchDbUrl} = require('../../config');

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    // public readonly _riakClient: any;
    public readonly _couchdb: any;

    protected constructor() {
        // this._riakClient = new Riak.Client([riakNodes], function (err, c) {
        //     console.log("Rick Client running...");
        // })
        //initiate Riak Object
        // let node = new Riak.Node({remoteAddress: '127.0.0.1', remotePort: 8087});
        // let cluster = new Riak.Cluster({nodes: [node]});
        // this._riakClient = new Riak.Client(cluster);
        this._couchdb = nano(couchDbUrl);


    }

    create(item: T): Promise<boolean> {
        return;
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
