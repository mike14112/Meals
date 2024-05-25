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
            showIsModal: true
        }
    },
    methods: {
        closeModal() {
            this.showIsModal = !this.showIsModal
        },
        openModal() {
            this.showIsModal = !this.showIsModal
        }

    }

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
                    <AppBasket @showModal="openModal" />
                    <ListItems :item="items" />
                </div>
            </div>
        </section>
    </main>
    <AppFooter />

</template>

<style scoped></style>
<!-- комопнент кнопки  -->