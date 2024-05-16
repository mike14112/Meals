<script>
export default {


    methods: {
        openModal() {
            this.$emit('showModal')
        }
    }
}
</script>

<template>
    <aside class="aside bg-white  py-6 px-4 min-w-72 max-h-28 mt-16 md:absolute md:z-10 md:mt-[-1.5rem] rounded-xl ">
        <div class="main-cart flex justify-around">
            <button class="cart-btn py-1 px-4 text-2xl font-black bg-white">Корзина</button>
            <span class="item-count bg-white pt-2 px-4 pb-1 rounded-md">0</span>
        </div>
        <span class="main-cart-empty"> В корзине пока пусто :( </span>
        <div class="content-cart hide mt-4">
            <ul class="lists-item flex flex-col">
                <li class="border-t border-[#f2f2f3] pt-4 flex items-center justify-between h-20">
                    <img alt="" class="h-[3.4rem] w-16">
                    <div class="item-descr flex flex-col ml-1.5  ">
                        <span class="mt-1.5">${item.name}</span>
                        <span class="weight mt-1 ">${item.weight}г</span>
                        <span class="mt-1.5">${item.price}₽</span>
                    </div>
                    <div
                        class="item-section bg-[#f2f2f3] py-2 px-3 rounded-2xl min-w-20 min-h-8 flex justify-around items-center mt-1.5 ml-6">
                        <button class="btn-minus border-none bg-[#f2f2f3]" data-index="${idx}">-</button>
                        <span class="item-count">${item.count}</span>
                        <button class="btn-plus border-none bg-[#f2f2f3]" data-index="${idx}">+</button>
                    </div>
                </li>
            </ul>
            <div class="cart-group flex flex-col justify-around">
                <div
                    class="count-section flex justify-between  items-baseline mt-3 mb-5 mr-0 ml-0 text-base font-bold ">
                    <span>Итого</span>
                    <span class="price-count">0 <span>₽</span></span>
                </div>
                <button
                    class="btn-checkout py-3 px-[4.5rem] rounded-2xl bg-[#ff7020] text-white hover:cursor-pointer bg-[#ffab08]"
                    data-disabled="disabled" @click="openModal">Оформить
                    Заказ</button>
                <div class="cart-content-group flex justify-around items-center mt-2 ">
                    <img src="../../img/icon/delivery.png" alt="" />
                    <span>Бесплатная Доставка</span>
                    <button class="btn-hide bg-white text-[#b1b1b1]">Свернуть</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
/* .aside {
    min-width: 300px;
    min-height: 110px;
    background-color: white;
    padding: 24px 16px;
    border-radius: 18px;
    margin-top: 70px;
}

.main-cart ul {
    display: flex;
    flex-direction: column;
}

.cart-btn {
    padding: 2px 16px 2px 16px;
    font-size: 24px;
    font-weight: 900;
    background-color: white;
}

.main-cart {
    display: flex;
    justify-content: space-around;
}

.main-cart span {
    background-color: #f2f2f3;
    padding: 10px 16px 2px 16px;
    border-radius: 6px;
}

.content-cart {
    margin-top: 16px;
}

.content-cart li {
    border-top: solid 1px #f2f2f3;
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 84px;
}

.content-cart li span {
    font-size: 12px;
}

.img-cart {
    width: 64px;
    height: 52px;
}

.item-descr {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}

.item-descr span {
    margin-top: 5px;
}

.item-section {
    background-color: #f2f2f3;
    padding: 9px 12px 9px 12px;
    border-radius: 16px;
    min-width: 84px;
    min-height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
    margin-left: 24px;
}

.item-section button {
    border: none;
    background-color: #f2f2f3;
}

.cart-group {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.count-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 13px 0px 19px 0px;
    font-size: 16px;
    font-weight: bolder;
}

.btn-checkout {
    padding: 12px 72px 12px 72px;
    border-radius: 16px;
    background-color: #ff7020;
    color: white;
}

.btn-checkout:hover {
    cursor: pointer;
    background-color: #ffab08;
}

.cart-content-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 8px;
}

.btn-hide {
    background-color: white;
    color: #b1b1b1;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {


    .aside {
        position: absolute;
        z-index: 1;
        margin-top: -70px;
    }
} */
</style>