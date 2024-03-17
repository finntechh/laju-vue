<template>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
const navDropdownMenu = ref(false);

const toggleDropdown = () => {
    navDropdownMenu.value = !navDropdownMenu.value;
    if (navDropdownMenu.value) {
        console.log("Nav Menu an")
    }
    else {
        console.log("Nav Menu aus")
    };
};


</script>