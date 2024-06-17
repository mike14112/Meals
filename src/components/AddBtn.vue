<script>
export default {

}
</script>

<template>
    <div>
        <button class=" btn-add ">
            <slot></slot>
        </button>
    </div>
</template>



<style scoped>
.btn-add {
    margin-top: 8px;
    padding: 12px 101px;
    border-radius: 12px;
    width: 280px;
}

.btn-add:hover {
    background-color: #ffab08;
}

@media screen and (min-width: 768px) and (max-width:1023px) {
    .btn-add {
        width: 137px;
        height: 30px;
        padding: 0;
    }
}

@media screen and (max-width:767px) {
    .btn-add {
        width: 137px;
        height: 30px;
        padding: 0;
    }
}
</style>