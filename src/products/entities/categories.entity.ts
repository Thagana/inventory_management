import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Product as CategoryModel } from 'src/products/interfaces/product.interface';

@Table
export class Category extends Model<CategoryModel> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    categoryName: string;
}