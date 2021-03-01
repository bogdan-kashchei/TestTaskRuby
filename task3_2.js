//обьект с городами
const towns = {
    lubeck: {
        goods: [
            {
                name: "salt",
                price: 20,
            }, {
                name: "fish",
                price: 50,
            }, {
                name: "cloth",
                price: 60,
            }, {
                name: "copper",
                price: 36,
            }, {
                name: "furs",
                price: 96,
            }]
    },
    reval: {
        goods: [
            {
                name: "salt",
                price: 35,
            }, {
                name: "fish",
                price: 50,
            }, {
                name: "cloth",
                price: 30,
            }, {
                name: "copper",
                price: 60,
            }, {
                name: "furs",
                price: 45,
            }]
    },
    bergen: {
        goods: [
            {
                name: "salt",
                price: 62,
            }, {
                name: "fish",
                price: 15,
            }, {
                name: "cloth",
                price: 18,
            }, {
                name: "copper",
                price: 82,
            }, {
                name: "furs",
                price: 54,
            }]
    }
}
// const goodsFromFirstTown = towns[town].goods.filter((good) => good.price < trader);
var traider = 50;// начальные деньги
var good;
function buy(town) {
    if (towns[town]) {
        for (let i = 0; i < towns[town].goods.length; i++) {
            let min = towns[town].goods[0].price;
            if (towns[town].goods[i].price < traider && towns[town].goods[i].price < min) {

                min = towns[town].goods[i].price;
                good = towns[town].goods[i].name;
                traider -= min;
                console.log('Buy ' + good + ' in ' + town + '. ' + 'Trader has ' + traider + ' coins.');
                break;
            }

        }
    }
}
function buy_max(town) {
    if (towns[town]) {
        for (let i = 0; i < towns[town].goods.length; i++) {
            let max = towns[town].goods[0].price;;
            if (towns[town].goods[i].price < traider && towns[town].goods[i].price > max) {

                max = towns[town].goods[i].price;
                good = towns[town].goods[i].name;
                traider -= max;
                console.log(max, good);
                console.log('Buy ' + good + ' in ' + town + '. ' + 'Trader has ' + traider + ' coins.');
                break;
            }

        }
    }
}

function sell(town) {
    if (towns[town]) {
        for (let i = 0; i < towns[town].goods.length; i++) {

            if (towns[town].goods[i].name == good) {
                traider += towns[town].goods[i].price;
                console.log('Sell ' + good + ' in ' + town + '. ' + 'Trader has ' + traider + ' coins.');
                good = null;
                break;
            }
        }
    }
}
const town1 = 'lubeck';
const town2 = 'reval';
const town3 = 'bergen';
buy(town2);
sell(town3);
buy(town3);
sell(town1);
buy(town1);
sell(town2);
console.log("Trader has " + traider + ' coins.');

