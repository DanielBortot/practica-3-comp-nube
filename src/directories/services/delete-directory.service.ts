import { Injectable } from "@nestjs/common";
import { DeleteDirectoryDto } from "../dtos/delete-directory.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Directory } from "../entities/directory.entity";

@Injectable()
export class DeleteDirectoryService {
    
    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}
    
    async execute(directory: DeleteDirectoryDto) {
        const find = await this.directoryModel.findOne({ id: directory.id })
        if ( !find ) return { msg: 'Directory not found' }
        const result = await this.directoryModel.findOneAndDelete({ id: directory.id })
        if ( !result ) return { msg: 'Something went wrong' }
        return result
    }

}