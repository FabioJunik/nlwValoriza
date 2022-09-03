import { Request, Response} from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";



export class CreateComplimentController{

    async handle(request: Request, response: Response){
        const {tag_id, user_sender, user_reciver, message} = request.body;

        const createComplimentService = new CreateComplimentService();

        const compliment =  await createComplimentService.execute({
            tag_id, 
            user_sender, 
            user_reciver, 
            message
        });

        return response.json(compliment);
    }
}