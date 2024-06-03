<script>

export default {
    emits: ['decrement', 'increment', 'showModal'],
    props: {
        cartItems: {
            type: Array,
            required: true,
        },
        isVisibleCart: {
            type: Boolean,
            required: true,

        }
    },
    data() {
        return {
            basketItems: this.cartItems,
            isVisible: this.isVisibleCart,
        }
    },

    methods: {
        openModal() {
            this.$emit('showModal')
        },
        changeVisibleCart() {
            this.isVisible = !this.isVisible
        },
        decrementCount(cartItem) {
            this.$emit('decrement', cartItem)

        },
        incrementCount(basketItem) {
            this.$emit('increment', basketItem)
        }
    },
    computed: {
        totalPice() {
            return this.cartItems.reduce((acc, item) => {
                return acc += parseInt(item.price) * parseInt(item.count)
            }, 0)

        },
    },


}

</script>

<template>
    <aside class="aside bg-white   py-6 px-4 min-w-72 min-h-28 mt-16 md:absolute md:z-10 md:mt-[-1.5rem] rounded-xl   ">
        <div class="main-cart flex justify-around">
            <button class="cart-btn py-1 px-4 text-2xl font-black bg-white"
                @:click="isVisible = !isVisible">Корзина</button>
            <span class="item-count bg-[#f2f2f3] py-2 px-4 rounded-xl text-center">{{ basketItems.length
                }}</span>
        </div>
        <div class="content-cart  text-xs  text-nowrap mt-4 " v-if="isVisible">
            <ul class="lists-item  flex flex-col  gap-[2rem]">
                <li class="border-t border-[#f2f2f3]   flex justify-between items-center  pt-2.5 px-4 pb-0.5 h-20"
                    v-for="basketItem in basketItems" :key="basketItem.id">
                    <img :src="basketItem.src" alt="" class="h-[3.4rem] w-16">
                    <div class="item-descr flex flex-col ml-1.5  ">
                        <span class="mt-1.5">{{ basketItem.title }}</span>
                        <span class="weight mt-1 decoration-grey ">{{ basketItem.weigth }} г</span>
                        <span class="mt-1.5">{{ basketItem.price }}₽</span>
                    </div>
                    <div
                        class="item-section bg-[#f2f2f3] py-2 px-3 rounded-2xl min-w-20 min-h-8 flex justify-around items-center mt-1.5 ml-6">
                        <button class="btn-minus border-none bg-[#f2f2f3]"
                            @:click="decrementCount(basketItem)">-</button>
                        <span class="item-count">{{ basketItem.count }}</span>
                        <button class="btn-plus border-none bg-[#f2f2f3]"
                            @:click="incrementCount(basketItem)">+</button>
                    </div>
                </li>
            </ul>
            <div class="cart-group flex flex-col justify-around">
                <div class="count-section flex justify-between  items-baseline mt-3 mb-5 mr-0 ml-0 text-base font-bold "
                    showcart>
                    <span>Итого</span>
                    <span class="price-count">
                        {{ totalPice }} <span>₽</span></span>
                </div>
                <button class=" btn-checkout py-3 px-[4.5rem] rounded-2xl bg-[#ff7020] text-white hover:cursor-pointer
                        hover:bg-[#ffab08]" @click="openModal">Оформить
                    Заказ</button>
                <div class="cart-content-group flex justify-around items-center mt-2 ">
                    <img src="../../img/icon/delivery.png" alt="" />
                    <span>Бесплатная Доставка</span>
                    <button class="btn-hide bg-white text-[#b1b1b1]" @:click="isVisible = !isVisible">Свернуть</button>
                </div>
            </div>
        </div>
        <span class="main-cart-empty" v-else> В корзине пока пусто :( </span>
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