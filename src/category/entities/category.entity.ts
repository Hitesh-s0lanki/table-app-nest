import { Subcategory } from "src/subcategory/entities/subcategory.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ default: new Date() })
    createdAt: Date

    @OneToMany(() => Subcategory, (subcategory) => subcategory.category, { onDelete: "CASCADE" })
    subcategories: Subcategory[]
}