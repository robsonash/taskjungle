
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Task>;

@Schema()
export class Task {

  id: string
  
  @Prop()
  name: string;

}

export const TaskSchema = SchemaFactory.createForClass(Task);