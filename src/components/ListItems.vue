<script>
import ItemCard from './ItemCard.vue';
export default {
    emits: ['add'],
    components: { ItemCard },

    props: {
        item: {
            type: Array,
            required: true
        }
    },
    methods: {
        additem(id) {
            this.$emit('add', id)
        }
    },
}
</script>

<template>
    <div class="tab-content  flex  flex-col gap-8 md:mt-32  md:gap-6 " id="1">
        <h2>{{ item[0].nameCategory }}</h2>
        <ul
            class="list-products grid grid-cols-3 gap-8 lg:grid-cols-2  md:grid-cols-4 md:gap-5 sm:grid-cols-2 sm:gap-2.5 ">
            <ItemCard v-for="items in item" :title="items.title" :price="items.price" :weigth="items.weigth"
                :src="items.src" :id="items.id" :key="items.id" @add="additem" />
        </ul>
    </div>
</template>


<style scoped></style>