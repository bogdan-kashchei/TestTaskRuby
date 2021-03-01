// ООП подход, не понял как сделать архитектуру для даного задания, надо использовать какой-то алгоритм из Дискретной математики.
// в 3_2 какая-то реализация купил-продал
class Goods {
    constructor() {

    }
    set goodName(name) {
        if (typeof name === 'string')
            this.name = name;
        // Object.create(this.name,this.price);


    }
    set goodPrice(price) {
        if (typeof price === 'number') {
            this.price = price;
        }
    }
    goods() {
        this.goods = [];
        this.obj = new Object();
        this.obj.name = this.name;
        this.obj.price = this.price;
        this.goods.push(this.obj);
        return this.goods;
    }

    info() {
        console.log(this.goods);
    }
}

class Base extends Goods {
    constructor(name, price) {
        this.name = name;
        this.price = price;



    }
    buy() {

    }
    sell() {

    }
}

let salt = new Goods();
salt.goodName = 'salt';
salt.goodPrice = 12;
console.log(salt.goods());
salt.info();
