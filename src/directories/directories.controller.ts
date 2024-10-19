import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { GetDirectoriesService } from './services/get-directories.service';
import { CreateDirectoryService } from './services/create-directories.service';
import { GetOneDirectoryService } from './services/get-one-directory.service';
import { UpdateDirectoryService } from './services/update-directory.service';
import { PartiallyUpdateDirectoryService } from './services/partially-update-directory.service';
import { DeleteDirectoryService } from './services/delete-directory.service';
import { CreateDirectoryDto } from './dtos/create-directory.dto';
import { PaginationQuery } from './dtos/pagination-query.dto';
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
  getDirectories( @Query() pagination: PaginationQuery  ) {
    let page:number = 0
    let perPage:number = 10
    if (pagination.page) page = parseInt(pagination.page)
    if (pagination.perPage) perPage = parseInt(pagination.perPage)
    return this.getDirectoriesService.execute( { page, perPage } )
  }

  @Get('/:id')
  getOneDirectory( @Param('id') directoryId: string ) {
    return this.getOneDirectoryService.execute( { id: directoryId } )
  }

  @Delete('/:id')
  deleteDirectory( @Param('id') directoryId: string ) {
    return this.deleteDirectoryService.execute( { id: directoryId } )
  }
  
  @Post()
  createDirectory(@Body() createDirectory: CreateDirectoryDto) {
    return this.createDirectoriesService.execute(createDirectory);
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

}