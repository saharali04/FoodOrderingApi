import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  _id?: number;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  food: string;

  @property({
    type: 'string',
    required: true,
  })
  customerName: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  tip: number;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
