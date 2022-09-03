import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

export class CreateUserService{

    async execute({name, email, password, admin=false}: IUserRequest){
        const usersRepositories =  getCustomRepository(UsersRepositories);
        
        if(!email){
            throw new Error("Email is required");
        }

        const userAlreadyExists = await usersRepositories.findOne({email});

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password,8);

        const user = usersRepositories.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepositories.save(user);

        return user;
    }
}