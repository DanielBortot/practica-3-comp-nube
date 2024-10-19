import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Directory } from "../entities/directory.entity";
import { GetOneDirectoryDto } from "../dtos/get-one-directory.dto";

@Injectable()
export class GetOneDirectoryService {

    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}
    
    async execute(directory: GetOneDirectoryDto) {
        const result = await this.directoryModel.findOne({ id: directory.id })
        if ( !result ) return { msg: 'Directory not found' }
        return { name: result.name, emails: result.emails }
    }


}