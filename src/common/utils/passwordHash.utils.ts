const crypto = require("crypto");

export function hashPassword(pass: string): string{

    let sha256 = crypto.createHash("sha256");
    sha256.update(pass, "utf8");//utf8 here
    return sha256.digest("base64");
}


