import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


export class ListUserReceiveComplimentsController{

    async handle(request: Request, response: Response){
        const {user_id} = request;

        console.log(user_id)

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();
        const compliment = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(compliment);
    }   
}