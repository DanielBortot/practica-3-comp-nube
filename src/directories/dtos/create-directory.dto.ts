import { ArrayNotEmpty, IsArray, IsEmail, IsString } from 'class-validator'

export class CreateDirectoryDto {
    @IsString()
    name: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsEmail({}, {each: true})
    emails: string[];
}