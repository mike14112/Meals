<script setup>
import ItemCard from './ItemCard.vue';

const props = defineProps({
    items: {
        type: Array,
    },

})


const emit = defineEmits(['add'])

const addItem = (title) => {
    emit('add', title)
}

</script>

<!-- <script>
import ItemCard from './ItemCard.vue';




export default {
    emits: ['add'],
    components: { ItemCard },

    props: {
        items: {
            type: Array,
            required: true,
        },

    },
    methods: {
        additem(id) {
            this.$emit('add', id)
        }
    },


}
</script> -->

<template>
    <div class="tab-content  flex  flex-col gap-8 md:mt-32  md:gap-6 " v-if="items != undefined">
        <h2 class="text-[2.5rem] font-bold">{{ props.items[0].nameCategory }}</h2>
        <ul class=" list-products grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-4 md:gap-5 sm:grid-cols-2
            sm:gap-2.5 ">
            <ItemCard v-for=" item in props.items" :title="item.title" :price="item.price" :weigth="item.weigth"
                :src="item.src" :id="item.id" :key="item.id" @add="addItem" />

        </ul>
    </div>
    <div class="tab-content  flex  flex-col gap-8 md:mt-32  md:gap-6  " v-else>
        <h2 class="text-[2.5rem] font-bold">Продуктов пока нет </h2>
    </div>
</template>


<style scoped></style>