import {activeStatus, Channel} from "../../../../common/enums";

export interface SingUp {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    iosDeviceId?: string;
    androidDeviceId?: string;
    channel: Channel;
    xmppId?: string;
    xmppStatus: activeStatus,
    manualStatus: activeStatus,
    createAt?: string,
    updatedAt?: string
}
