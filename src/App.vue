<script>
import AppHeader from "./components/AppHeader.vue"
import AppPromo from "./components/AppPromo.vue"
import AppNav from "./components/AppNav.vue"
import AppBasket from "./components/AppBasket.vue"
import ListItems from "./components/ListItems.vue"
import AppFooter from "./components/AppFooter.vue"
import AppModal from "./components/AppModal.vue"
import AppToast from "./components/AppToast.vue"
import burger from '../src/burger.json'
import snacks from '../src/snacks.json'
import hotDog from '../src/hot-dog.json'
export default {
    components: { AppHeader, AppPromo, AppNav, AppBasket, ListItems, AppFooter, AppModal, AppToast },
    data() {
        return {
            currentTab: 0,
            currentItems: burger,
            showIsModal: false,
            isVisibleCart: false,
            cartItems: [],
            cartItem: {},
            title: 'sucsess',
            content: 'order',
            currentStatus: 'sucsess',
            isShowToast: false
        }
    },
    methods: {
        closeModal() {
            this.showIsModal = !this.showIsModal
        },
        openModal() {
            if (this.cartItems.length > 0) {
                this.showIsModal = true
            } else {
                this.showIsModal = false
            }
        },
        addItem(title) {
            const cartItemIndex = this.cartItems.findIndex(item => item.title === title)
            this.isVisibleCart = true
            if (cartItemIndex === -1) {
                this.cartItem = this.currentItems.find(item => item.title === title);
                this.cartItems.push(this.cartItem)
                this.cartItem.count = 1
            } else {
                this.cartItems.forEach((item) => {
                    if (item.title == title) {
                        item.count++
                    }
                })

            }

        },
        decrementCount(cartItem) {
            cartItem.count--
            if (cartItem.count < 1) {
                const index = this.cartItems.findIndex(item => item.id === cartItem.id);
                if (index !== -1) {
                    this.cartItems.splice(index, 1);
                }
            }
        },
        incrementCount(cartItem) {
            cartItem.count++
        },
        changeTab(dataId) {
            const items2 = [burger, snacks, hotDog]
            this.currentTab = +dataId
            this.currentItems = items2[this.currentTab]
        },
        orderCheckout(order) {
            console.log(order)
            this.showIsModal = false
            this.cartItems.splice(0)
            this.isVisibleCart = false
            this.cartItem = {}
            this.isShowToast = true
        },

        closeToast(event) {
            this.isShowToast = false
        }
    },


}
</script>

<template>
    <AppHeader />
    <AppPromo />
    <AppModal :showIsModal="showIsModal" @modal-Close="closeModal" @createOrder="orderCheckout" />
    <main>
        <AppNav @dataTab="changeTab" />
        <section>
            <div class="container">
                <div class="wrapper">
                    <AppBasket @showModal="openModal" :cartItems="cartItems" :isVisibleCart="isVisibleCart"
                        @decrement="decrementCount" @increment="incrementCount" />
                    <ListItems :items="currentItems" @add="addItem" />
                </div>
            </div>
        </section>
    </main>
    <AppToast v-show="isShowToast" :currentStatus="currentStatus" :title="title" :content="content"
        @closeToast="closeToast" />
    <AppFooter />
</template>

<style scoped></style>
<!-- комопнент кнопки  -->