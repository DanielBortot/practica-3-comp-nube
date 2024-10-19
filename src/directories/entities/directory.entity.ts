import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Directory implements IDirectory {
    @Prop({unique: true})
    id: number;

    @Prop({required: true, unique: true, type: String})
    name: string;

    @Prop({required: true, type: [{type: String}]})
    emails: string[]
}

export const DirectorySchema = SchemaFactory.createForClass(Directory);