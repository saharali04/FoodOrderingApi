"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FoodOrderController = class FoodOrderController {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(order) {
        return this.orderRepository.create(order);
    }
    async count(where) {
        return this.orderRepository.count(where);
    }
    async find(filter) {
        return this.orderRepository.find(filter);
    }
    async updateAll(order, where) {
        return this.orderRepository.updateAll(order, where);
    }
    async findById(id, filter) {
        return this.orderRepository.findById(id, filter);
    }
    async updateById(id, order) {
        await this.orderRepository.updateById(id, order);
    }
    async replaceById(id, order) {
        await this.orderRepository.replaceById(id, order);
    }
    async deleteById(id) {
        await this.orderRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/orders'),
    rest_1.response(200, {
        description: 'Order model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Order) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Order, {
                    title: 'NewOrder',
                    // exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/orders/count'),
    rest_1.response(200, {
        description: 'Order model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/orders'),
    rest_1.response(200, {
        description: 'Array of Order model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Order, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/orders'),
    rest_1.response(200, {
        description: 'Order PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Order, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Order)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/orders/{id}'),
    rest_1.response(200, {
        description: 'Order model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Order, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Order, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/orders/{id}'),
    rest_1.response(204, {
        description: 'Order PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Order, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Order]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/orders/{id}'),
    rest_1.response(204, {
        description: 'Order PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Order]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/orders/{id}'),
    rest_1.response(204, {
        description: 'Order DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], FoodOrderController.prototype, "deleteById", null);
FoodOrderController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrderRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrderRepository])
], FoodOrderController);
exports.FoodOrderController = FoodOrderController;
//# sourceMappingURL=food-order.controller.js.map