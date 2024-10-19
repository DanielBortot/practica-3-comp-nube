import { Body, Controller, Delete, Get, Inject, Patch, Post, Put, Query } from '@nestjs/common';
import { GetDirectoriesService } from './services/get-directories.service';
import { CreateDirectoryService } from './services/create-directories.service';
import { GetOneDirectoryService } from './services/get-one-directory.service';
import { UpdateDirectoryService } from './services/update-directory.service';
import { PartiallyUpdateDirectoryService } from './services/partially-update-directory.service';
import { DeleteDirectoryService } from './services/delete-directory.service';
import { CreateDirectoryDto } from './dtos/create-directory.dto';
import { PartialUpdateDto } from './dtos/partial-update-directory.dto';
import { UpdateDto } from './dtos/update-directory.dto';

@Controller('directories')
export class DirectoriesController {
  constructor(
    @Inject(GetDirectoriesService) private readonly getDirectoriesService: GetDirectoriesService,
    @Inject(CreateDirectoryService) private readonly createDirectoriesService: CreateDirectoryService,
    @Inject(GetOneDirectoryService) private readonly getOneDirectoryService: GetOneDirectoryService,
    @Inject(UpdateDirectoryService) private readonly updateDirectoryService: UpdateDirectoryService,
    @Inject(PartiallyUpdateDirectoryService) private readonly partiallyUpdateDirectoryService: PartiallyUpdateDirectoryService,
    @Inject(DeleteDirectoryService) private readonly deleteDirectoryService: DeleteDirectoryService,
  ) {}

  @Get()
  getDirectories() {
    return this.getDirectoriesService
  }

  @Post()
  createDirectory(@Body() createDirectory: CreateDirectoryDto) {
    return this.createDirectoriesService.execute(createDirectory);
  }

  @Get()
  getOneDirectory() {
    return this.getOneDirectoryService
  }

  @Put()
  async updateDirectory(
    @Query() query:{id:string},
    @Body() data: UpdateDto
  ) {
    return await this.updateDirectoryService.execute({id:+query.id,...data})
  }

  @Patch()
  async partiallyUpdateDirectory(
    @Query() query:{id:string},
    @Body() data: PartialUpdateDto
  ) {
    return await this.partiallyUpdateDirectoryService.execute({id:+query.id,...data})
  }

  @Delete()
  deleteDirectory() {
    return this.deleteDirectoryService
  }
}