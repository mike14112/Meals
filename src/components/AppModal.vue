<script>

export default {
    props: {
        showIsModal: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        closeModal() {
            this.$emit('modalClose')
        }
    }

}
</script>

<template>
    <div class="modal bg-black  w-full h-full z-20 fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] md:ml-[-8%]  sm:top-[40%]"
        v-if="showIsModal">
        <div
            class="modal-window relative flex w-[42.8rem] h-[29rem] bg-white mt-24 mx-auto rounded-3xl sm:w-full sm:h-full sm:py-8 sm:px-2.5 sm:flex sm:flex-col sm:items-center  ">
            <div class="side-modal bg-[#ffab08] rounded-t-3xl rounded-l-3xl py-16 px-6 md:hidden sm:hidden">
                <img src="../../img/modal-img.png" alt="">
            </div>
            <div class="form-modal py-11 px-6 top-6 right-6 sm:h-full  ">
                <img src="../../img/close-modal.png " alt=""
                    class="btn-close-modal absolute  top-6 right-6 cursor-pointer " @:click="closeModal">
                <h2 class="form-title sm:ml-6">Доставка</h2>
                <form action=""
                    class="form h-full flex flex-col  justify-around pt-4 gap-2 sm:justify-between sm:py-8 sm:px-2.5 ">
                    <div class="modal-group flex flex-col gap-2 ">
                        <input type="text" placeholder="Ваше Имя" minlength="4" maxlength="10"
                            class="input-name mt-3 border-none rounded-xl text-[#b1b1b1] ">
                        <input type="number" min="1" max="999" minlength="12" maxlength="12" placeholder="Телефон"
                            class="input-phone mt-3 border-none rounded-xl text-[#b1b1b1]">
                        <div class="radio-section flex flex-col ">
                            <span>
                                <input type="radio" value="pickup" checked name="btn-radio" class="btn-radio">
                                <label for="pickup">Самовывоз</label>
                            </span>
                            <span>
                                <input type="radio" value="delivery" name="btn-radio" class="btn-radio">
                                <label for="delivery">Доставка</label>
                            </span>
                        </div>
                        <div class="delivery-section  w-[18.5rem] hide sm:mb-[22rem]">
                            <input type="text" placeholder="Улица, дом, квартира" class="input-adress">
                            <div class="section-home-input flex gap-5">
                                <input type="number" class="input-floor w-36" min="1" max="100" maxlength="2"
                                    placeholder="Этаж">
                                <input type="number" placeholder="Домофон" maxlength="4" min="1" max="999"
                                    class="input-intercom w-36">
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-confirn mt-8 py-3 px-28 text-white rounded-xl w-80 hover:bg-[#ffab08]">Оформить</button>
                </form>
            </div>
        </div>
    </div>
</template>



<style scoped>
/* .modal {
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 100%;
    z-index: 5;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.modal-window {
    position: relative;
    display: flex;
    width: 684px;
    height: 462px;
    background-color: #f9f9f9;
    margin: 90px auto;
    border-radius: 24px;
}

.side-modal {
    background-color: #ffab08;
    border-radius: 24px 0px 0px 24px;
    padding: 62px 22px 62px 22px;
}

.btn-close-modal {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
}

.form-modal {
    padding: 44px 24px;
}

.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 16px;
    gap: 8px;
}

.modal-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form input {
    margin-top: 12px;
    border: none;
    border-radius: 12px;
    padding: 12px;
    color: #b1b1b1;
}

.radio-section {
    display: flex;
    flex-direction: column;
}

.delivery-section input {
    width: 298px;
}

.section-home-input {
    display: flex;
    gap: 20px;
}

.section-home-input input {
    width: 143px;
}


@media screen and (min-width: 768px) and (max-width: 1023px) {
    .modal-window {
        margin-left: 8%;
    }

    .side-modal {
        display: none;
    }
}

@media screen and (max-width:767px) {
    .modal {
        top: 40%;
    }

    .modal-window {
        width: 100%;
        height: 100%;
        padding: 32px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form {
        justify-content: space-between;
        padding: 32px 10px;
    }

    .form-modal {
        height: 100%;
    }

    .form-title {
        margin-left: 22px;
    }

    .side-modal {
        display: none;
    }

    .delivery-section {
        margin-bottom: 350px;
    }

    .modal-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

} */
</style>