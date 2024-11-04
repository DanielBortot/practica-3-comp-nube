import { IsNumber } from 'class-validator'

export class DeleteDirectoryDto {
    @IsNumber()
    id: number;
}