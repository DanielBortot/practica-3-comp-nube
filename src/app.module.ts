import { Module } from '@nestjs/common';
import { StatusController } from './status/status.controller';
import { DirectoriesController } from './directories/directories.controller';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/envs';
import { Directory, DirectorySchema } from './directories/entities/directory.entity';
import { CreateDirectoryService } from './directories/services/create-directories.service';
import { DeleteDirectoryService } from './directories/services/delete-directory.service';
import { GetDirectoriesService } from './directories/services/get-directories.service';
import { GetOneDirectoryService } from './directories/services/get-one-directory.service';
import { PartiallyUpdateDirectoryService } from './directories/services/partially-update-directory.service';
import { UpdateDirectoryService } from './directories/services/update-directory.service';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { Connection } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${envs.mongo_user}:${envs.mongo_pass}@${envs.db_host}:27017/`),

    MongooseModule.forFeatureAsync([
      {
        name: Directory.name,
        useFactory: async (connection: Connection) => {
          const schema = DirectorySchema;
          const autoIncrement = AutoIncrementFactory(connection);
          DirectorySchema.plugin(autoIncrement, {inc_field: 'id'});
          return schema
        },
        inject: [getConnectionToken()]
      }
    ])
  ],
  controllers: [
    StatusController,
    DirectoriesController
  ],
  providers: [CreateDirectoryService, DeleteDirectoryService, GetDirectoriesService, GetOneDirectoryService, PartiallyUpdateDirectoryService, UpdateDirectoryService, DeleteDirectoryService],
})
export class AppModule {}
