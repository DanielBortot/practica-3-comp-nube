import { Module } from '@nestjs/common';
import { StatusController } from './status/status.controller';
import { DirectoriesController } from './directories/directories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config/envs';
import { Directory, DirectorySchema } from './directories/entities/directory.entity';
import { CreateDirectoryService } from './directories/services/create-directories.service';
import { DeleteDirectoryService } from './directories/services/delete-directory.service';
import { GetDirectoriesService } from './directories/services/get-directories.service';
import { GetOneDirectoryService } from './directories/services/get-one-directory.service';
import { PartiallyUpdateDirectoryService } from './directories/services/partially-update-directory.service';
import { UpdateDirectoryService } from './directories/services/update-directory.service';

@Module({
  imports: [
    MongooseModule.forRoot(envs.db_host),

    MongooseModule.forFeature([
      {
        name: Directory.name,
        schema: DirectorySchema
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
