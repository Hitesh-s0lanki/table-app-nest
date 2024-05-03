import { Subcategory } from "src/subcategory/entities/subcategory.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ type: "decimal" })
    price: number;

    @ManyToOne(() => Subcategory, (subcategory) => subcategory.products)
    subcategory: Subcategory
}
