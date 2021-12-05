import {activeStatus, Channel} from "../enums";
import * as Nano from 'nano';

export interface iPatient extends Nano.MaybeDocument {
    uuid?: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    image?: string;
    iosDeviceId?: string;
    androidDeviceId?: string
    channel: Channel;
    xmppId?: string;
    xmppStatus: activeStatus,
    manualStatus: activeStatus,
    createAt?: string,
    updatedAt?: string

    processAPIResponse(response: Nano.DocumentInsertResponse): void;
}
