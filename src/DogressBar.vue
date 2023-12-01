<script setup lang="ts">
import { defineProps } from 'vue';
import DogressBarBone from './components/DogressBarBone.vue';

const { score, maxScore } = defineProps<{ 
  score: number,
  maxScore: number
}>()

const bones = Array.from({ length: maxScore }, (_, index: number) => ({ filled: index + 1 <= score, key: index }))
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="score"
    aria-valuemin="0"
    :aria-valuemax="maxScore"
    :aria-valuetext="score.toLocaleString()"
    aria-label="Score Chart"
  >
    <span class="bar-segment" v-for="bone of bones">
      <DogressBarBone :key="bone.key" :filled="bone.filled" class="bone"/>
    </span>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-flow: row nowrap;
  }

  .bar-segment {
    --bar-segment-height: 1.2em;
    inline-size: var(--bar-segment-height);
    block-size: var(--bar-segment-height);
    margin-inline-end: 0.5em;
    display: flex;
    align-items: flex-end;    
  }
  
  .bar-segment:last-child {
    margin-right: 0;
  }

  .bone {
    inline-size: 100%;
    block-size: auto;
  }
</style>