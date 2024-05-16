<script>
export default {

}
</script>

<template>
    <section
        class="promo-group flex  justify-center items-center  gap-8 bg-[#ffab08] rounded-b-[10rem] sm:flex-col-reverse sm:items-center  px-[6.5rem]  pt-[4rem] pb-[3.5rem] ">
        <img src="../../../img/burger.png"
            class="xl:w-[20rem] lg:w-[20rem] md:w-44  sm:w-44 :ml-[4rem ] sm:mb-[2rem] " />
        <div
            class=" promo-title w-72 h-48 text-white  flex flex-col justify-around mr-[8rem] mt-1  sm:mr-0 sm:ml-[2rem] sm:items-center sm:justify-around ">
            <h1 class="decoration-white text-3xl text-nowrap">
                Только самые <br />
                <p class="text-red-600"> сочные бургеры !</p>
            </h1>
            <span>Бесплатная доставка от 599₽</span>
        </div>
    </section>
</template>

<style scoped>
/* .promo-group {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffab08;
    border-radius: 0 0 320px 240px;
} */

/* .promo-group img {
    width: 254px;
    height: 300px;
    margin: 24px;
} */

/* .promo-title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-height: 194px;
    max-width: 437px;
    color: white;
} */

/* .promo-title h1 {
    color: white;
}

.promo-title p {
    color: red;
} */

/* @media screen and (min-width: 768px) and (max-width:1023px) {

    .promo-group {
        border-radius: 0 0 160px 160px;
    }

    .promo-group img {
        width: 176px;
        height: 204px;
    }
} */

/* @media screen and (max-width:767px) {
    .promo-group {
        display: flex;
        flex-direction: column-reverse;
        height: 460px;
        border-radius: 0px 0px 200px 200px;
    }

    .promo-title {
        display: flex;
        align-items: center;
        margin-left: 40px;
    }

    .logo-section img {
        width: 176px;
        height: 204px;
    }
} */
</style>