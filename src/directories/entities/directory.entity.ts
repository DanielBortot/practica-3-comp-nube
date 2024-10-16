import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as AutoIncrementFactory from 'mongoose-sequence';
import * as mongoose from 'mongoose';

@Schema()
export class Directory {
    @Prop()
    id: number;

    @Prop({required: true, type: String})
    name: string;

    @Prop({required: true, type: [{type: String}]})
    emails: string[]
}

const DirectorySchema = SchemaFactory.createForClass(Directory);
DirectorySchema.plugin(AutoIncrementFactory(mongoose), { inc_field: 'id' })

export {DirectorySchema}