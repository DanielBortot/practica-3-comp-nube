import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Directory {
    @Prop({auto: "number"})
    id: number;

    @Prop({required: true, type: String})
    name: string;

    @Prop({required: true, type: [{type: String}]})
    emails: string[]
}

export const DirectorySchema = SchemaFactory.createForClass(Directory);