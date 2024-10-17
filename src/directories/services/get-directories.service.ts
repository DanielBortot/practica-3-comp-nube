import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Directory } from "../entities/directory.entity";
import { Model } from "mongoose";
import { GetManyDirectoryDto } from "../dtos/get-many-directory-dto";

@Injectable()
export class GetDirectoriesService {
    
    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}

    async execute( pagination: GetManyDirectoryDto ) {
        let page:number = 0
        let perPage:number = 5
        if (pagination.page) page = pagination.page
        if (pagination.perPage) perPage = pagination.perPage
        const result = await this.directoryModel.find().skip(page).limit(perPage)
        const directoriesFormat = result.map(direc => {
            return {id: direc.id, name: direc.name, emails: direc.emails}
        })
        return {
            count: directoriesFormat.length,
            next: '?',
            previous: '?',
            results: directoriesFormat
        }
    }
}