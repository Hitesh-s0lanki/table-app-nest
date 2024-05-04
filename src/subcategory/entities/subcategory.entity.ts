import { Category } from "src/category/entities/category.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subcategory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Category, (category) => category.subcategories, { onDelete: "CASCADE" })
    category: Category

    @OneToMany(() => Product, (product) => product.subcategory)
    products: Product[]
}
