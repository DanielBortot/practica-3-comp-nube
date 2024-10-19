import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Directory } from "../entities/directory.entity";
import { Model } from "mongoose";
import { UpdateInfaestructureServiceDto } from "../dtos/update-infraestructure.dto";

@Injectable()
export class UpdateDirectoryService {
    constructor(@InjectModel(Directory.name) private directoryModel: Model<Directory>) {}

    async execute(data:UpdateInfaestructureServiceDto):Promise<IDirectory>{
    try{        
        const directoryFound = await this.directoryModel.findOne({id:data.id})
        
        if (!directoryFound) throw new NotFoundException('Error en el servidor intentalo de nuevo mas tarde','no encontrado');

        directoryFound.emails=data.emails
        directoryFound.name=data.name
        
        await directoryFound.updateOne(directoryFound)
        return {name: directoryFound.name, emails: directoryFound.emails}    
    }
        catch(e){
            throw new InternalServerErrorException('Error en el servidor intentalo de nuevo mas tarde',e.name);
        }
    }
}