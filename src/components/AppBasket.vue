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
        },

    },
    computed: {
        totalPice() {
            return this.basketItems.reduce((acc, item) => {
                return acc += parseInt(item.price) * parseInt(item.count)
            }, 0)

        },
        totalCount() {
            return this.basketItems.reduce((total, item) => {
                return total += parseInt(item.count)
            }, 0)
        }

    },



}

</script>

<template>
    <aside class=" bg-white   py-6 px-4 min-w-72 min-h-28 mt-16 md:absolute md:z-10 md:mt-[-1.5rem] rounded-xl   ">
        <div class=" flex justify-around">
            <button class=" py-1 px-4 text-2xl font-black bg-white" @:click="isVisible = !isVisible">Корзина</button>
            <span class=" bg-[#f2f2f3] py-2 px-4 rounded-xl text-center">{{ totalCount }}</span>
        </div>
        <span v-show="basketItems.length == 0"> В корзине пока пусто :( </span>
        <div class="  text-xs  text-nowrap mt-4 " v-if="isVisible">
            <ul class=" flex flex-col  gap-[2rem]">
                <li class="border-t border-[#f2f2f3]   flex justify-between items-center  pt-2.5 px-4 pb-0.5 h-20"
                    v-for="basketItem in basketItems" :key="basketItem.id">
                    <img :src="basketItem.src" alt="" class="h-[3.4rem] w-16">
                    <div class="item-descr flex flex-col ml-1.5  ">
                        <span class="mt-1.5">{{ basketItem.title }}</span>
                        <span class="weight mt-1 decoration-grey ">{{ basketItem.weigth }} г</span>
                        <span class="mt-1.5">{{ basketItem.price }}₽</span>
                    </div>
                    <div
                        class=" bg-[#f2f2f3] py-2 px-3 rounded-2xl min-w-20 min-h-8 flex justify-around items-center mt-1.5 ml-6">
                        <button class=" border-none bg-[#f2f2f3]" @:click="decrementCount(basketItem)">-</button>
                        <span>{{ basketItem.count }}</span>
                        <button class=" border-none bg-[#f2f2f3]" @:click="incrementCount(basketItem)">+</button>
                    </div>
                </li>
            </ul>
            <div class="flex flex-col justify-around">
                <div class=" flex justify-between  items-baseline mt-3 mb-5 mr-0 ml-0 text-base font-bold " showcart>
                    <span>Итого</span>
                    <span class="price-count">
                        {{ totalPice }} <span>₽</span></span>
                </div>
                <button class=" py-3 px-[4.5rem] rounded-2xl bg-[#ff7020] text-white hover:cursor-pointer
                        hover:bg-[#ffab08]" @click="openModal">Оформить
                    Заказ</button>
                <div class="flex justify-around items-center mt-2 ">
                    <img src="/img/icon/delivery.png" alt="" />
                    <span>Бесплатная Доставка</span>
                    <button class=" bg-white text-[#b1b1b1]" @:click="isVisible = !isVisible">Свернуть</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped></style>