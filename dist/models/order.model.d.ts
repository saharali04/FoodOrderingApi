import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    _id?: number;
    date: string;
    food: string;
    customerName: string;
    price: number;
    tip: number;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
