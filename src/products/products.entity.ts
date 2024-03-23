import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Product as ProductModel } from 'src/products/interfaces/product.interface';

@Table
export class Product extends Model<ProductModel> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    productID: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    dateAdded: Date;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantity: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'In Stock',
    })
    availability: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    categoryID: number;
}