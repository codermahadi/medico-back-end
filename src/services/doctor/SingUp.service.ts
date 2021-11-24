import {SingUp} from "../repositories/domain/doctor/singup";
import {BaseRepository} from "../../repositories/base/base.repository";
import {Bucket} from "../../common/enums";

export class SingUpService extends BaseRepository<SingUp> {
     async create(item: SingUp): Promise<boolean> {

         let res: boolean = true;
          await this._riakClient.storeValue({
             bucket: Bucket.DOCTORS,
             key: item.id,
             value: item
         }, await function (err, result) {
             console.log(result);
             res = !err;
         });

          return res;



        // this._riakClient.fetchValue({
        //     bucket: Bucket.DOCTORS,
        //     key: 'ca6613a8-683f-4d0e-a080-6413f8e24eef',
        //     convertToJs: true
        // }, function (err, result){
        //
        //     if (err){
        //         throw new Error(err)
        //     }else {
        //         let riakObj = result.values.shift();
        //         let bashoMan = riakObj.value;
        //         console.log(bashoMan);
        //     }
        // });



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
