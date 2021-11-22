import {RiakRepository} from "./RiakRepository";

export class Doctor implements RiakRepository{
    constructor() {
        console.log("init obj.....")
    }
    move(input: number): number {
        return input;
    }

}
