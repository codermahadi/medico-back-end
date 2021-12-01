import * as Nano from 'nano'
import {iDoctor} from "../../common/interfaces/iDoctor";
import {activeStatus, Channel} from "../../common/enums";

export class Doctor implements iDoctor {
    _id: string;
    _rev: string;
    androidDeviceId: string;
    channel: Channel;
    email: string;
    uuid: string;
    image: string;
    iosDeviceId: string;
    manualStatus: activeStatus;
    name: string;
    password: string;
    phoneNumber: string;
    xmppId: string;
    xmppStatus: activeStatus;
    createAt?: string;
    updatedAt?: string

    constructor(
        androidDeviceId: string,
        channel: Channel,
        email: string,
        uuid: string,
        image: string,
        iosDeviceId: string,
        manualStatus: activeStatus,
        name: string,
        password: string,
        phoneNumber: string,
        xmppId: string,
        xmppStatus: activeStatus,
        createAt?: string,
        updatedAt?: string
    ) {
        this.androidDeviceId = androidDeviceId;
        this.channel = channel;
        this.email = email;
        this.uuid = uuid;
        this.image = image;
        this.iosDeviceId = iosDeviceId;
        this.manualStatus = manualStatus;
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.xmppId = xmppId;
        this.xmppStatus = xmppStatus;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }

    processAPIResponse(response: Nano.DocumentInsertResponse) {
        if (response.ok === true) {
            this._id = response.id
            this._rev = response.rev
        }
    }
}