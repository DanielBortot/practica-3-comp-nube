import { IsString } from 'class-validator'

export class DeleteDirectoryDto {
    @IsString()
    id: string;
}