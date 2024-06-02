<!-- 
item:{
  id:  string
  title: string,
  price: number,
  weigth: number,
  src: string
}
 -->

<script>
import AddBtn from './AddBtn.vue';
export default {
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
  emits: ['add'],
  methods: {
    addItem() {
      this.$emit('add', this.id)
    },

  },
}
</script>
<template>
  <li
    class="carl  max-w-[20rem] bg-white  p-3  rounded-[1rem] flex flex-col box-border  justify-around md:w-[9.5rem]  md:p-1 sm:w-[9.3rem]">
    <img :src="src" alt="" class="img  w-72 h-56  mb-4  md:w-[9.75rem] md:h-[7.5rem] sm:w-[8.5rem] sm:h-[7.5rem] " />
    <h3 class="price mb-2"> {{ price }}₽</h3>
    <h4 class="name">{{ title }}</h4>
    <div class=" flex flex-col align-center mt-8  w-[17rem] md:w-[5.5rem]  sm:w-[8rem] ">
      <h5 class="weight  text-gray-500">{{ weigth }}г </h5>
      <AddBtn @click="addItem">Добавить</AddBtn>
    </div>
  </li>

</template>

<style scoped>
/* .list-products {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 320px;

} */

/* .card {
  background-color: white;
  padding: 12px 12px 12px 12px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
} */

/* .card-sub-group {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 276px;
}

.card img {
  width: 300px;
  height: 220px;
  margin-bottom: 16px;
}

.price {
  margin-bottom: 8px;

}

.weight {
  color: #B1B1B1;
} */

/* @media screen and (max-width: 768px) {
  .card {
    width: 156px;
    height: 280px;
    padding: 4px 4px 4px 10px;
  }


  .card img {
    width: 137px;
    height: 120px;
  }

  .card-sub-group {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 86px;
  }
}

@media screen and (max-width:767px) {
  .card {
    width: 148px;
    height: 246px;
    padding: 4px;
  }

  .card img {
    width: 138px;
    height: 120px;
  }
} */
</style>
