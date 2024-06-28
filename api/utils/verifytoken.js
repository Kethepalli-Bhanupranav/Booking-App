import jwt from "jsonwebtoken";
import { creatError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(creatError(401, "You are not Admin"));
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(creatError(403, "Token Not valid"));
        }
        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next,(err) => {
        if (err) {
            return next(err); // Pass the error to the next middleware
        }
        if (req.user.id === req.params.id || req.user.isadmin) {
            next();
        } else {
            return next(creatError(403, "You are not authorized"));
        }
    });
};
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next ,(err) => {
        if (err) {
            return next(err); // Pass the error to the next middleware
        }
        if (req.user.isadmin) {
            next();
        } else {
            return next(creatError(403, "You are not authorized"));
        }
    });
};
