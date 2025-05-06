import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateCarDto {
    @IsString({ message: 'The brand must be a string' })
    @IsNotEmpty({ message: 'The brand is required' })
    readonly brand: string;

    @IsString({ message: 'The model must be a string' })
    @IsNotEmpty({ message: 'The model is required' })
    // @MinLength(3, { message: 'The model must be at least 3 characters long' })
    readonly model: string;

    @IsNumber()
    @IsNotEmpty({ message: 'The year is required' })
    readonly year: number;
}