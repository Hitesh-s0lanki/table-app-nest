import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;
}
