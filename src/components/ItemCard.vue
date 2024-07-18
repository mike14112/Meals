<!-- 
item:{
  id:  string
  title: string,
  price: number,
  weigth: number,
  src: string
}
 -->

<script setup>
import AddBtn from './AddBtn.vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  weigth: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['add'])



const addItem = (title) => {
  emits('add', title)
} 
</script>

<!-- <script>
import AddBtn from './AddBtn.vue';
export default {
  emits: ['add'],
  components: { AddBtn },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    weigth: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    }


  },
  methods: {
    addItem() {
      this.$emit('add', this.title)
    },

  },

}
</script> -->
<template>
  <li
    class="carl  max-w-[20rem] bg-white  p-3  rounded-[1rem] flex flex-col box-border  justify-around md:w-[9.5rem]  md:p-1 sm:w-[9.3rem]">
    <img :src="src" alt="" class="img  w-72 h-56  mb-4  md:w-[9.75rem] md:h-[7.5rem] sm:w-[8.5rem] sm:h-[7.5rem] " />
    <h3 class="price mb-2 font-bold"> {{ price }}₽</h3>
    <h4 class="name font-bold">{{ title }}</h4>
    <div class=" flex flex-col align-center mt-8  w-[17rem] md:w-[5.5rem]  sm:w-[8rem] ">
      <h5 class="weight  text-gray-500">{{ weigth }}г </h5>
      <AddBtn v-on:click="addItem(props.title)">Добавить</AddBtn>
    </div>
  </li>

</template>

<style scoped></style>
