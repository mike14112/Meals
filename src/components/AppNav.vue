<script setup>
const emits = defineEmits(['dataTab'])

const getTab = (event) => {
    emits('dataTab', event.currentTarget.getAttribute('data-tab'))

}

</script>

<script>

</script>

<template>
    <section class="navigation py-[4rem]">
        <div class="container">
            <ul class="nav flex  overflow-x-scroll gap-6">
                <button
                    class=" flex justify-center items-center   py-1 w-96 px-3  border-white bg-white  rounded-[3.125rem] gap-2 md:gap-3   cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="0" @:click="getTab">
                    <img src="/img/icon/Бургеры.png" alt="" />
                    <span>Бургеры</span>
                </button>
                <button
                    class=" flex justify-center items-center  py-1 w-96 px-3  border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3    cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="1" @:click="getTab">
                    <img src="/img/icon/Закуски.png" alt="" />
                    <span>Закуски</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3   cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="2" @:click="getTab">
                    <img src="/img/icon/Хот-доги.png" alt="" />
                    <p>Хот-доги</p>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3  cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="3" @:click="getTab">
                    <img src="/img/icon/Комбо.png" alt="" />
                    <span>Комбо</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3  cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="4" @:click="getTab">
                    <img src="/img/icon/Шаурма.png" alt="" />
                    <span>Шаурма</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3  cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="5" @:click="getTab">
                    <img src="/img/icon/Пицца.png" alt="" />
                    <span>Пицца</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3 cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="6" @:click="getTab">
                    <img src="/img/icon/Вок.png" alt="" />
                    <span>Вок</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3  cursor-pointer whitespace-nowrap hover:bg-[#ffab08] "
                    :data-tab="7" @:click="getTab">
                    <img src="/img/icon/Десерты.png" alt="" />
                    <span>Десерты</span>
                </button>
                <button
                    class=" flex justify-center items-center py-1 w-96 px-3 border-white bg-white p rounded-[3.125rem] gap-2 md:gap-3  cursor-pointer whitespace-nowrap hover:bg-[#ffab08]"
                    :data-tab="8" @:click="getTab">
                    <img src="/img/icon/Соусы.png" alt="" />
                    <span>Соусы</span>
                </button>
            </ul>
        </div>
    </section>

</template>

<style scoped></style>