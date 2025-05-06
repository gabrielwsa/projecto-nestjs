import { IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;

    @IsNumber()
    @IsOptional()
    readonly year?: number;
}
