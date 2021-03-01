class Discount {
    constructor(item, discount) {
        this.item = item;
        this.discount = discount;
    }

    calcDiscount() {
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            sum += item[i] - (item[i] * (discount[i] / 100));
        }
        return sum;
    }
}
let item = [100.0, 112.2, 301.1];
let discount = [10, 0, 0];
let cart = new Discount(item, discount);
console.log(cart.calcDiscount());