import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_reciver: string;
    message: string;
}

export class CreateComplimentService{

    async execute({tag_id, user_sender, user_reciver, message}:IComplimentRequest) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);   

        if(user_reciver === user_sender)
            throw new Error("User Reciver invalid !");

        const userReciverExits = await usersRepositories.findOne(user_reciver);

        if(!userReciverExits)
            throw new Error("User Reciver does not exists !");

        const compliment =  complimentsRepositories.create({
            tag_id,
            user_reciver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}