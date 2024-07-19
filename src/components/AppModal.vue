<script setup>
import { reactive } from 'vue';

const emits = defineEmits(['createOrder', 'modalClose'])

const props = defineProps({
    showIsModal: {
        type: Boolean,
        required: true
    }
})
const formData = reactive({
    name: '',
    phone: '',
    isTake: 'pickup',
    adress: '',
    cityCom: '',
    floor: '',
})
const closeModal = () => {
    emits('modalClose')
}
const createOrder = () => {
    const order = {}
    if (formData.isTake == 'pickup' && formData.name.length >= 3 && formData.phone >= 8) {
        order.id = Math.floor(Math.random() * 22)
        order.IsTake = formData.isTake
        order.name = formData.name
        order.phone = formData.phone
        formData.name = ''
        formData.phone = ''
        emits('createOrder', order)

    } else if (formData.isTake == 'delivery' && formData.name.length >= 3 && formData.phone >= 8 && formData.adress.length >= 8 && formData.floor.length >= 1) {
        order.id = Math.floor(Math.random() * 22)
        order.IsTake = formData.IsTake
        order.name = formData.name
        order.phone = formData.phone
        order.adress = formData.adress
        order.floor = formData.floor
        order.cityCom = formData.cityCom
        formData.name = ''
        formData.phone = ''
        formData.adress = ''
        formData.floor = ''
        formData.cityCom = ''
        emits('createOrder', order)
    }
}


</script>
<template>
    <div class="modal bg-black  w-full h-full z-20 fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]  sm:top-[40%] "
        v-if="showIsModal">
        <div
            class="modal-window relative flex w-[42.8rem] h-[29rem] bg-white mt-24 mx-auto rounded-3xl sm:w-full sm:h-full sm:py-8 sm:px-2.5 sm:flex sm:flex-col sm:items-center  ">
            <div class="side-modal bg-[#ffab08] rounded-t-3xl rounded-l-3xl py-16 px-6 md:hidden sm:hidden">
                <img src="/img/modal-img.png" alt="">
            </div>
            <div class="form-modal py-11 px-6 top-6 right-6 sm:h-full  ">
                <img src="/img/close-modal.png " alt="" class="btn-close-modal absolute  top-6 right-6 cursor-pointer "
                    @:click="closeModal">
                <h2 class="form-title sm:ml-6">Доставка</h2>
                <form action=""
                    class="form h-full flex flex-col  justify-around pt-4 gap-2 sm:justify-between sm:py-8 sm:px-2.5 "
                    @submit.prevent="createOrder">
                    <div class="modal-group flex flex-col gap-2 ">
                        <input type="text" placeholder="Ваше Имя" minlength="4" maxlength="10"
                            class="input-name mt-3 border-none rounded-xl text-[#b1b1b1] " v-model.trim="formData.name">
                        <input type="number" minlength="12" maxlength="12" placeholder="Телефон"
                            class="input-phone mt-3 border-none rounded-xl text-[#b1b1b1]"
                            v-model.trim="formData.phone">
                        <div class="radio-section flex flex-col ">
                            <span>
                                <input type="radio" value="pickup" checked name="btn-radio" class="btn-radio"
                                    v-model="formData.isTake">
                                <label for="pickup">Самовывоз</label>
                            </span>
                            <span>
                                <input type="radio" value="delivery" name="btn-radio" class="btn-radio"
                                    v-model="formData.isTake">
                                <label for="delivery">Доставка</label>
                            </span>
                        </div>
                        <div class="delivery-section  w-[18.5rem] sm:mb-[22rem]" v-show="formData.isTake == 'delivery'">
                            <input type=" text" placeholder="Улица, дом, квартира" class="input-adress"
                                v-model="formData.adress">
                            <div class="section-home-input flex gap-5">
                                <input type="number" class="input-floor w-36" min="1" max="100" maxlength="2"
                                    placeholder="Этаж" v-model="formData.floor">
                                <input type="number" placeholder="Домофон" maxlength="4" min="1" max="999"
                                    class="input-intercom w-36" v-model="formData.cityCom">
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-confirn bg-[#FF7020] mt-8 py-3 px-28 text-white rounded-xl w-80 hover:bg-[#ffab08]"
                        @:click="createOrder">
                        Оформить</button>
                </form>
            </div>
        </div>
    </div>
</template>



<style scoped></style>