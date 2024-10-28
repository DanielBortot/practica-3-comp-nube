import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Directory } from "../entities/directory.entity";
import { Model } from "mongoose";
import { GetManyDirectoryDto } from "../dtos/get-many-directory-dto";
import { envs } from "src/config/envs";

@Injectable()
export class GetDirectoriesService {
    
    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}

    async execute( pagination: GetManyDirectoryDto ) {
        let page:number = pagination.page
        let perPage:number = pagination.perPage
        let skip: number = 0
        let newPage: number = (page+1)
        let oldPage: number = (page-1)
        let next = 'http://localhost:'+envs.port+'/directories?page='+newPage+'&perPage='+perPage
        let previous = 'http://localhost:'+envs.port+'/directories?page='+oldPage+'&perPage='+perPage
        if (page == 0) previous = 'On page 0'
        if (page > 0) skip = (page-1)*perPage
        
        // page=1, perpage=10, total=100 -> limit=perpage, skip=(page-1)*perPage
        const result = await this.directoryModel.find().skip(skip).limit(perPage)
        const directoriesFormat = result.map(direc => { return {id: direc.id, name: direc.name, emails: direc.emails} })

        if ( result.length < 10 ) next = 'On last page'

        return {
            count: directoriesFormat.length,
            next: next,
            previous: previous,
            results: directoriesFormat
        }
    }
}