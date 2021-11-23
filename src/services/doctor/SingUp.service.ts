import {SingUp} from "../repositories/domain/doctor/singup";
import {BaseRepository} from "../../repositories/base/base.repository";

export class SingUpService extends BaseRepository<SingUp>{
    create(item: SingUp): Promise<boolean> {
        return Promise.resolve(false);
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
