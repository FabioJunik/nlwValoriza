import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const token = authToken.split(" ")[1];
    
    try{
        const {sub} = verify(token, "321e61c589079ea0fe776cc96eaa7fc7") as IPayload;

        request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }

}