import jwt from "jsonwebtoken";

const generateAccessToken = (userId, role) => {
    return jwt.sign({ userId, role }, String(process.env.ACCESS_TOKEN_SECRET), {
        expiresIn: process.env.TOKEN_EXPIRATION,
    });
};

const generatePasswordResetToken = (userId, role) => {
    return jwt.sign({ userId, role }, String(process.env.ACCESS_TOKEN_SECRET), {
        expiresIn: "15m",
    });
};

export default { generateAccessToken, generatePasswordResetToken };
