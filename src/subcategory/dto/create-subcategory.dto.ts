import { IsNotEmpty } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class CreateSubcategoryDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
}
