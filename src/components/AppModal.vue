<script>
export default {
    emits: ['createOrder', 'modalClose'],
    props: {
        showIsModal: {
            type: Boolean,
            required: true
        },
    },

    data() {
        return {
            order: {
                name: '',
                phone: '',
                isTake: 'pickup',
                adress: '',
                cityCom: '',
                floor: '',
            }

        }
    },
    methods: {
        closeModal() {
            this.$emit('modalClose')
        },
        orderorder() {
            const order = {}
            if (this.order.isTake == 'pickup' && this.order.name.length >= 3 && this.order.phone >= 8) {
                order.id = Math.floor(Math.random() * 22)
                order.IsTake = this.order.isTake
                order.name = this.order.name
                order.phone = this.order.phone
                this.order.name = ''
                this.order.phone = ''
                this.$emit('createOrder', order)
            } else if (this.order.isTake == 'delivery' && this.order.name.length >= 3 && this.order.phone >= 8 && this.order.adress.length >= 8 && this.order.floor.length >= 1) {
                order.id = Math.floor(Math.random() * 22)
                order.IsTake = this.order.isTake
                order.name = this.order.name
                order.phone = this.order.phone
                order.adress = this.order.adress
                order.floor = this.order.floor
                this.order.cityCom = this.order.cityCom
                this.order.name = ''
                this.order.phone = ''
                this.order.adress = ''
                this.order.floor = ''
                this.order.cityCom = ''
                this.$emit('createOrder', order)
            }

        }
    },

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
                    @submit.prevent="orderorder">
                    <div class="modal-group flex flex-col gap-2 ">
                        <input type="text" placeholder="Ваше Имя" minlength="4" maxlength="10"
                            class="input-name mt-3 border-none rounded-xl text-[#b1b1b1] " v-model.trim="order.name">
                        <input type="number" minlength="12" maxlength="12" placeholder="Телефон"
                            class="input-phone mt-3 border-none rounded-xl text-[#b1b1b1]" v-model.trim="order.phone">
                        <div class="radio-section flex flex-col ">
                            <span>
                                <input type="radio" value="pickup" checked name="btn-radio" class="btn-radio"
                                    v-model="order.isTake">
                                <label for="pickup">Самовывоз</label>
                            </span>
                            <span>
                                <input type="radio" value="delivery" name="btn-radio" class="btn-radio"
                                    v-model="order.isTake">
                                <label for="delivery">Доставка</label>
                            </span>
                        </div>
                        <div class="delivery-section  w-[18.5rem] sm:mb-[22rem]" v-show="order.isTake == 'delivery'">
                            <input type=" text" placeholder="Улица, дом, квартира" class="input-adress"
                                v-model="order.adress">
                            <div class="section-home-input flex gap-5">
                                <input type="number" class="input-floor w-36" min="1" max="100" maxlength="2"
                                    placeholder="Этаж" v-model="order.floor">
                                <input type="number" placeholder="Домофон" maxlength="4" min="1" max="999"
                                    class="input-intercom w-36" v-model="order.cityCom">
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-confirn bg-[#FF7020] mt-8 py-3 px-28 text-white rounded-xl w-80 hover:bg-[#ffab08]"
                        @:click="orderorder">
                        Оформить</button>
                </form>
            </div>
        </div>
    </div>
</template>



<style scoped></style>