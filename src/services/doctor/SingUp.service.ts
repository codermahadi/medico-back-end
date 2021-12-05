import {iDoctor} from "../../common/interfaces/iDoctor";

const logger = require('winston');
import {BaseRepository} from "../../repositories/base/base.repository";
import {tables} from "../../common/enums";
import {Doctor} from "../../models/doctor/Doctor";
import {checkError} from "../../common/utils/checkError";

export class SingUpService extends BaseRepository<iDoctor> {
    private readonly db: any;

    constructor() {
        super();
        this.db = this._couchdb.use(tables.DOCTORS);
    }

    async create(item: iDoctor): Promise<boolean> {
        let doctor: iDoctor = new Doctor(item.androidDeviceId, item.channel, item.email, item.uuid, item.image, item.iosDeviceId, item.manualStatus, item.name, item.password, item.phoneNumber, item.xmppId, item.xmppStatus, item.createAt, item.updatedAt)

        let q = {
            selector: {"phoneNumber": item.phoneNumber},
            use_index: `_design/${tables.DOCTORS}`,
        }
        const find = await this.db.find(q);

        // Check User Exists or not
        if (find.docs.length < 1) {
            // data insert here
            await this.db.insert(doctor).then(r => {
                doctor.processAPIResponse(r);
                logger.info(doctor);
            }).catch(e => checkError(e));

            //indexing here
            await this.db.createIndex({
                index: {
                    fields: ['email', 'phoneNumber', 'uuid', 'channel']
                },
                ddoc: tables.DOCTORS
            });
        } else {
            throw new Error("User Already exists!");
        }


        return !!doctor._id;
    }

    async login(item: any): Promise<iDoctor> {

        let q = {
            selector: {"phoneNumber": item.phoneNumber, "password": item.password},
            use_index: `_design/${tables.DOCTORS}`,
        }
        let find = await this.db.find(q);
        if (find.docs.length < 1) {
            throw new Error("Phone number or password invalid");
        }
        return find.docs[0];
    }

    delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    find(item: iDoctor): Promise<iDoctor[]> {
        return Promise.resolve([]);
    }

    async findOne(item: iDoctor): Promise<iDoctor> {

        let q = {
            selector: {"phoneNumber": item.phoneNumber},
            use_index: `_design/${tables.DOCTORS}`,
        }

        const find = await this.db.find(q);
        console.log(find.docs.length)
        return find.docs.length > 0 ? find.docs[0] : null;
    }

    update(id: string, item: iDoctor): Promise<boolean> {
        return Promise.resolve(false);
    }

}
