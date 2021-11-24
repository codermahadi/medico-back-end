const crypto = require("crypto");

export function hashPassword(pass: string): string{

    let sha256 = crypto.createHash("sha256");
    sha256.update(pass, "utf8");//utf8 here
    let result = sha256.digest("base64");
    console.log(result); //d7I986+YD1zS6Wz2XAcDv2K8yw3xIVUp7u/OZiDzhSY=
    return result;
}


