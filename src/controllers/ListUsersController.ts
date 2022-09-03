import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";


export class ListUsersController{
    async handle(request: Request, response: Response){
        const listUserService = new ListUsersService();

        const listUsers = await listUserService.execute();

        return response.json(listUsers);
    }   
}