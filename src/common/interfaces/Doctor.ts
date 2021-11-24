import {activeStatus, Channel} from "../enums";

export interface Doctor {
    id?: string;
    name:        string;
    email:       string;
    phoneNumber: string;
    password?:    string;
    image?:       string;
    iosDeviceId?: string;
    androidDeviceId?: string
    channel: Channel;
    xmppId?: string;
    xmppStatus: activeStatus,
    manualStatus: activeStatus,
}
