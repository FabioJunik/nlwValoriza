import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain} from "class-transformer";

export class ListUsersService {
    async execute(){
        const userRepositories = getCustomRepository(UsersRepositories);

        const users = userRepositories.find();

        return classToPlain(users);
    }
}