import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

export class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({email});

        if(!user)
            throw new Error("Email or Password incorrect !");

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch)
            throw new Error("Email or Password incorrect !");

        const token = sign({
            email: user.email
        }, "321e61c589079ea0fe776cc96eaa7fc7",{
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}