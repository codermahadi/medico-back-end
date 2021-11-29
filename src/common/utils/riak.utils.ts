const logger = require('winston');

export function checkErr(err) {
    if (err) {
        logger.error(err);
        process.exit(1);
        throw new Error(err);
    }
}

export const get = async (riakClient: any, key: string, bucket: string, callback: any) => {
    await riakClient.fetchValue({
        bucket: bucket,
        key: key,
        convertToJs: true
    }, function (err, result) {
        if (err) {
            throw new Error(err)
        } else {
            if (result.values.length > 0) {
                let riakObj = result.values.shift();
                let bashoMan = riakObj.value;
                callback(bashoMan)
            } else {
                callback(null)
            }
        }
    });
}
export const save = async (riakClient: any, key: string, bucket: string, item: any, index: string, callback: any): Promise<boolean> => {

    // Insert Data
    await riakClient.storeValue({
        bucket: bucket,
        key: key,
        value: item,
        returnBody: true,
    }, function (err, result) {
        checkErr(err);
        //Fetch
        riakClient.fetchValue({
            bucket: bucket,
            key: key
        }, function (err, rslt) {
            //Error
            checkErr(err);
            // add indexing
            let fetchedOrderObj = rslt.values.shift();
            fetchedOrderObj.addToIndex(index, 1000);
            fetchedOrderObj.addToIndex('updateAt_bin', item.updatedAt);
            riakClient.storeValue({value: fetchedOrderObj}, function (err, rslt) {
                checkErr(err);
                callback({bucket: bucket})
            });
        })
        return !err;
    });

    return true;
}

// get all index
export const indexQuery = (riakClient: any, bucket: string, index: string, callback): any[] => {
    logger.info("Queries...");
    const indexes = [];
    riakClient.secondaryIndexQuery({
        bucket: bucket, indexName: index, indexKey: 1000
    }, function (err, result) {
        checkErr(err);

        if (result.values.length > 0) {
            Array.prototype.push.apply(indexes,
                result.values.map(function (value) {
                    return value.objectKey;
                })
            );
        }


        // Array.prototype.push.apply(indexes,
        //     result.values.map(function (value) {
        //         logger.info(value.objectKey);
        //         return value.objectKey;
        //     })
        // );

        if (result.done) {
            callback(indexes);
            logger.info(456, result)
        }

    });

    logger.info("array", indexes)
    return indexes;
}
