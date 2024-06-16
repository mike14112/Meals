<script>
export default {
    emits: ['closeToast'],
    props: {
        currentStatus: {
            type: String,
            requred: true
        },
        title: {
            type: String,
            requred: true
        },
        content: String,
        requred: true
    },
    isShow: {
        type: Boolean,
        required: true
    },
    data() {
        return {
            containerClass: 'bg-blue-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10 ',
            isShow: this.isShow
        }
    },
    methods: {
        closeToast() {
            this.$emit('closeToast')
        }
    },
    computed: {
        containerClass() {
            switch (this.currentStatus) {
                case 'error':
                    return 'bg-red-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10 ';
                case 'warning':
                    return 'bg-yellow-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';
                case 'sucsess':
                    return 'bg-green-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';
                case 'info':
                    return 'bg-blue-300 flex   p-4 rounded-md space-x-3 w-64 absolute top-2 right-10';

            }
        }
    }
}
</script>

<template>
    <div :class="containerClass">
        <div>
            <img src="../../../public/img/icon/bell.png" alt="" class="w-6 h-6">
        </div>
        <div class=" flex-1 space-y-2">
            <h2 class="font-medium text-blue-900">{{ title }}</h2>
            <div class="text-sm  text-blue-800">{{ content }}</div>
        </div>
        <div class=" shrink-0">
            <button class="text-blue-900/70  hover:bg-blue-200 p-0.5 rounded-md -m-1" @:click="closeToast"><img
                    src="../../../public/img/icon/close.png" alt="" class="w-6 h-6"></button>
        </div>
    </div>
</template>

<style scoped></style>
