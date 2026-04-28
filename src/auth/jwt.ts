import jwt from "jsonwebtoken"

export function generateToken(payload:any){

    const secretKey:any = process.env.JWT_SECRET;

    const token = jwt.sign(
        payload,
        "your_secret_key",
        {expiresIn: "1h"}
    );
    return token;
}