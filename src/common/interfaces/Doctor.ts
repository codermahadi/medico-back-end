export interface Doctor {
    id?: string;
    name:        string;
    email:       string;
    phoneNumber: string;
    password:    string;
    channel?:     string;
    image?:       string;
    iosDeviceId?: string;
    androidDeviceId?: string
}
