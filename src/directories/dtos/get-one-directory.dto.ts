import { IsString } from 'class-validator'

export class GetOneDirectoryDto {
    @IsString()
    id: string;
}