import { Injectable } from "@nestjs/common";
import { CreateDirectoryDto } from "../dtos/create-directory.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Directory } from "../entities/directory.entity";
import { Model } from "mongoose";

@Injectable()
export class CreateDirectoryService {

    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}

    async execute(directory: CreateDirectoryDto) {
        const newDirectory = new this.directoryModel(directory);
        return await newDirectory.save();
    }
}