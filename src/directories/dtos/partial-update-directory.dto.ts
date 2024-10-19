import { ArrayNotEmpty, IsArray, IsEmail, IsOptional, IsString } from 'class-validator'

export class PartialUpdateDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsOptional()
    @IsEmail({}, {each: true})
    emails: string[];
}