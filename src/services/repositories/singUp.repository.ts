import {SingUp} from "./domain/doctor/singup";

export interface SingUpRepository {
    stored(entry: SingUp): Promise<void>;
}
