export interface RiakRepository {
    get: () => any;
    store: (body: any, keyId: string) => any;
    getById: (keyId: string) => any;
    update: (body:any, keyId: string) => any;
    delete: (keyId: string) => any;
}
