import {SingUpRepository} from "../repositories/singUp.repository";
import {SingUp} from "../repositories/domain/doctor/singup";

export class SingUpService {
    constructor(private readonly singUpRepository: SingUpRepository){};

    public async store(entry: SingUp): Promise<void> {
        await this.singUpRepository.stored(entry);
        console.log(entry);
    }
}
