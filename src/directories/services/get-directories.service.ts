import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Directory } from "../entities/directory.entity";
import { Model } from "mongoose";

@Injectable()
export class GetDirectoriesService {
    
    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}

    async execute() {
        const directories = await this.directoryModel.find()
        const directoriesFormat = directories.map(direc => {
            return {id: direc.id, name: direc.name, emails: direc.emails}
        });

        return {
            count: directoriesFormat.length,
            next: 'no se',
            previous: 'no se',
            results: directoriesFormat
        }
    }
}