import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


export class ListUserReceiveComplimentsService{
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        
        const compliment = await complimentsRepositories.find({
            where:{
                user_reciver: user_id,
            }
        })

        return compliment;
    }
}