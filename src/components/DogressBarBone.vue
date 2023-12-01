<script setup lang="ts">
    import { defineProps } from 'vue'
    import IconBiscuitFull from './icons/IconBiscuitFull.vue';
    import IconBiscuitEaten from './icons/IconBiscuitEaten.vue';

    defineProps<{
        filled: boolean
    }>()
</script>

<template>
    <IconBiscuitFull v-if="filled" />
    <IconBiscuitEaten v-else />
</template>