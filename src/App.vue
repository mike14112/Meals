<script setup>
import { ref, reactive, onMounted } from "vue"
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
const currentTab = ref(0),
    currentItems = ref(burger),
    showIsModal = ref(false),
    isVisibleCart = ref(false),
    cartItems = ref([]),
    title = ref('success'),
    content = ref('order'),
    currentStatus = ref('success'),
    isShowToast = ref(false)
let cartItem = reactive({})


const closeModal = () => {
    showIsModal.value = !showIsModal.value
}


const addItem = (title) => {
    const cartItemIndex = cartItems.value.findIndex(item => item.title === title)
    isVisibleCart.value = true
    if (cartItemIndex === -1) {
        cartItem = currentItems.value.find(item => item.title === title);
        cartItem.count = 1
        cartItems.value.push(cartItem)
        console.log(cartItems.value)
    } else {
        cartItems.value.forEach((item) => {
            if (item.title == title) {
                item.count++
            }
        })

    }

}

const decrementCount = (cartItem) => {
    cartItem.count--
    if (cartItem.count < 1) {
        const index = cartItems.value.findIndex(item => item.id === cartItem.id);
        if (index !== -1) {
            cartItems.value.splice(index, 1);
        }
    }
}

const incrementCount = (cartItem) => {
    cartItem.count++
}

const changeTab = (dataId) => {
    const items2 = [burger, snacks, hotDog]
    currentTab.value = +dataId
    currentItems.value = items2[currentTab.value]
}

const orderCheckout = (order) => {
    console.log(order)
    showIsModal.value = false
    cartItems.value.splice(0)
    isVisibleCart.value = false
    cartItem = {}
    isShowToast.value = true
}

const closeToast = (event) => {
    isShowToast.value = false
}

const openModal = () => {
    console.log(cartItems.value)
    if (cartItems.value.length > 0) {
        showIsModal.value = true
    } else {
        showIsModal.value = false
    }
}
</script>

<!-- <script>
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
</script> -->

<template>
    <AppHeader />
    <AppPromo />
    <AppModal :showIsModal="showIsModal" @modal-Close="closeModal" @createOrder="orderCheckout" />
    <main>
        <AppNav @dataTab="changeTab" />
        <section>
            <div class="container">
                <div class="wrapper">
                    <AppBasket @showModal="openModal" :cartItems="cartItems" :isVisible="isVisibleCart"
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