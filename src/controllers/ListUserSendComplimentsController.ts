import { Request, Response} from "express"; 
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";


export class ListUserSendComplimentsController{

    async handle(request: Request, response: Response){
        const {user_id} = request;
        
        console.log(user_id)

        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const compliment = await listUserSendComplimentsService.execute(user_id);

        return response.json(compliment);
    }   
}