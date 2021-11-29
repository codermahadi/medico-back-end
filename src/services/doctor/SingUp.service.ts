const logger = require('winston');
import {SingUp} from "../repositories/domain/doctor/singup";
import {BaseRepository} from "../../repositories/base/base.repository";
import {get, indexQuery, save} from "../../common/utils/riak.utils";
import {Buckets} from "../../common/enums";

export class SingUpService extends BaseRepository<SingUp> {
    async create(item: SingUp, callback) {

        await get(this._riakClient, item.phoneNumber, Buckets.COMMON_BUCKET, function (uuid) {
            if (uuid) {
                callback({
                    isSuccess: false,
                    message: 'Doctor already registered',
                    item: {}
                });
            } else {
                //Insert data in common bucket
                save(this._riakClient, item.phoneNumber, Buckets.COMMON_BUCKET, {uuid: item.id}, 'uuid_int', function (data) {
                    if (data) {
                        //Insert data in doctor bucket
                        save(this._riakClient, item.id, Buckets.DOCTORS, item, 'uuid_int', function (data) {
                            if (data) {

                                callback({
                                    isSuccess: true,
                                    message: 'Doctor successfully registered',
                                    item: {}
                                });
                            }

                        });
                    }
                });
            }
        });

        // indexQuery(this._riakClient, Buckets.COMMON_BUCKET, 'uuid_int', callback);
        // if (res){
        //    await save(this._riakClient, item.id, Buckets.DOCTORS, item)
        // }

        // this._riakClient.secondaryIndexQuery({ bucket: Buckets.COMMON_BUCKET, indexName: 'id', indexKey: 9000 }, function (err, rslt) {
        //
        //     console.log(err, rslt);
        // })

    }

    delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    find(item: SingUp): Promise<SingUp[]> {
        return Promise.resolve([]);
    }

    findOne(item: SingUp): Promise<SingUp> {

        return Promise.resolve(undefined);
    }

    update(id: string, item: SingUp): Promise<boolean> {
        return Promise.resolve(false);
    }

}
