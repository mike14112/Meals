<script>
import AppHeader from "./components/AppHeader.vue";
import AppPromo from "./components/AppPromo.vue";
import AppNav from "./components/AppNav.vue"
import AppBasket from "./components/AppBasket.vue"
import ListItems from "./components/ListItems.vue";
import AppFooter from "./components/AppFooter.vue"
import AppModal from "./components/AppModal.vue"
import burger from '../public/burger.json'
import snacks from '../public/snacks.json'
import hotDog from '../public/hot-dog.json'

export default {
    components: { AppHeader, AppPromo, AppNav, AppBasket, ListItems, AppFooter, AppModal },
    data() {
        return {
            items: burger,
            showIsModal: false,
            isVisibleCart: false,
            cartItems: [],
            cartItem: {}

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
        addItem(id) {
            const cartItemIndex = this.cartItems.findIndex(item => item.id === id)
            this.isVisibleCart = true


            if (cartItemIndex === -1) {
                this.cartItem = this.items.find(item => item.id === id);
                this.cartItem.count = 1
                this.cartItems.push(this.cartItem)
            } else {
                this.cartItems.forEach((item) => {
                    if (item.id == id) {
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
        }
    },
}
</script>

<template>
    <AppHeader />
    <AppPromo />
    <AppModal :showIsModal="showIsModal" @modal-Close="closeModal" />
    <main>
        <AppNav />
        <section>
            <div class="container">
                <div class="wrapper">
                    <AppBasket @showModal="openModal" :cartItems="cartItems" :isVisibleCart="isVisibleCart"
                        @decrement="decrementCount" @increment="incrementCount" />
                    <ListItems :item="items" @add="addItem" />
                </div>
            </div>
        </section>
    </main>
    <AppFooter />

</template>

<style scoped></style>
<!-- комопнент кнопки  -->