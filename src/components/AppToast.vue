<script setup>
import { computed } from 'vue';

const emits = defineEmits(['closeToast'])
const props = defineProps({
    currentStatus: {
        type: String,
        requred: true
    },
    title: {
        type: String,
        requred: true
    },

    content: {
        String,
        requred: true
    }
})
const containerClass = computed(() => {
    switch (props.currentStatus) {
        case 'error':
            return containerClass.value = 'bg-red-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10 ';
        case 'warning':
            return containerClass.value = 'bg-yellow-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';
        case 'success':
            return containerClass.value = 'bg-green-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';
        case 'info':
            return containerClass.value = 'bg-blue-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';
    }

})

const closeToast = () => {
    emits('closeToast')
}
</script>
<template>
    <div :class="containerClass">
        <div>
            <img src="/img/icon/bell.png" alt="" class="w-6 h-6">
        </div>
        <div class=" flex-1 space-y-2">
            <h2 class="font-medium text-blue-900">{{ title }}</h2>
            <div class="text-sm  text-blue-800">{{ content }}</div>
        </div>
        <div class=" shrink-0">
            <button class="text-blue-900/70  hover:bg-blue-200 p-0.5 rounded-md -m-1" @:click="closeToast"><img
                    src="/img/icon/close.png" alt="" class="w-6 h-6"></button>
        </div>
    </div>
</template>

<style scoped></style>
