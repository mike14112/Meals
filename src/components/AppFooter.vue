<script>
export default {

}
</script>
<template>
    <footer class="footer bg-white mt-28 pt-14  pb-10 px-8 ">
        <div
            class="footer-items mt-14 grid grid-cols-4  md:grid-cols-3 col-span-[3/1] md:gap-9 sm:flex flex-col items-start gap-6">
            <img src="../../img/footer-logo.png" alt="" class="footer-items  col-span-2">
            <div class="phone-section col-span-1 md:col-[1/3]  ">
                <h4>Номер для заказа</h4>
                <div class="phone-area  mt-6 flex items-center justify-start ">
                    <img src="../../img/icon/Call.png" alt=""> <a href="tel:+79308333811"> +7(930)833-38-11</a>
                </div>
            </div>
            <div class="link-section col-span-1 md:col-span-[1/3] ">
                <h4>Мы в соцсеятх</h4>
                <div class="group-links flex justify-start mt-[1.5rem] gap-4 ">
                    <img src="../../img/icon/bi_telegram.png" alt=""> <a href=""></a>
                    <img src="../../img/icon/vk.png" alt=""> <a href=""></a>
                </div>
            </div>
            <div class="desinger  md:col-span-[1/3] mt-[3.8rem]">
                <span>© YouMeal, 2022</span> <br>
                <span>Design: Anastasia Ilina</span>
            </div>
        </div>
    </footer>
</template>



<style scoped>
/* .footer {
    background-color: white;
    margin-top: 100px;
    padding: 52px 32px 40px 32px;
}

.footer-items {
    margin-top: 54px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
}

.phone-section {
    margin-top: 56px;
}

.link-section {
    margin: 56px;
}

.phone-area {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.group-links {
    display: flex;
    margin-top: 22px;
    gap: 16px;
}

.desinger {
    margin-top: 60px;
} */

@media screen and (min-width: 768px) and (max-width: 1023px) {
    /* .footer-items {
        grid-column: 3/1;
        gap: 36px;
    } */

    /* .phone-section {
        grid-column: 1/3;
        margin: 0;
    }

    .link-section {
        gap: 2/3;
        gap: 176px;
        margin: 0;
    }

    .desinger {
        grid-column: 1/3;
    }
} */

    /* @media screen and (max-width: 767px) {
    .footer-items {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .footer-logo {
        width: 196px;
        height: 38px;
    }

    .phone-section {
        margin: 0;
    }

    .link-section {
        margin: 0;
    } */
}
</style>