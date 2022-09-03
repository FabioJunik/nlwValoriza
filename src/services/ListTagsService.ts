import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";




export class ListTagsService{
    
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = tagsRepositories.find();

        return tags;
    }
}