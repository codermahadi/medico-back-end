import {BaseRepository} from "../../repositories/base/base.repository";
import {iPatient} from "../../common/interfaces/iPatient";
import {tables} from "../../common/enums";
import {checkError} from "../../common/utils/checkError";
import logger from 'winston';
import {Patient} from "../../models/patient/Patient";

export class PatientSingUpService extends BaseRepository<iPatient> {
    private readonly db: any;

    constructor() {
        super();
        this._couchdb.use(tables.PATIENTS);
    }

    async create(item: iPatient): Promise<boolean> {
        let patient: iPatient = new Patient(item.androidDeviceId, item.channel, item.email, item.uuid, item.image, item.iosDeviceId, item.manualStatus, item.name, item.password, item.phoneNumber, item.xmppId, item.xmppStatus, item.createAt, item.updatedAt)

        let q = {
            selector: {"phoneNumber": item.phoneNumber},
            use_index: `_design/${tables.PATIENTS}`,
        }
        const find = await this.db.find(q);

        // Check User Exists or not
        if (find.docs.length < 1) {
            // data insert here
            await this.db.insert(patient).then(r => {
                patient.processAPIResponse(r);
                logger.info(patient);
            }).catch(e => checkError(e));

            //indexing here
            await this.db.createIndex({
                index: {
                    fields: ['email', 'phoneNumber', 'uuid', 'channel']
                },
                ddoc: tables.PATIENTS
            });
        } else {
            throw new Error("User Already exists!");
        }


        return !!patient._id;
    }

    async login(item: any): Promise<iPatient> {

        let q = {
            selector: {"phoneNumber": item.phoneNumber, "password": item.password},
            use_index: `_design/${tables.PATIENTS}`,
        }
        let find = await this.db.find(q);
        if (find.docs.length < 1) {
            throw new Error("Phone number or password invalid");
        }
        return find.docs[0];
    }
}