"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Order = class Order extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "_id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "date", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "food", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Order.prototype, "customerName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "price", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Order.prototype, "tip", void 0);
Order = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Order);
exports.Order = Order;
//# sourceMappingURL=order.model.js.map