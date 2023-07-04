<template>
  <div class="bg-white font-sans">
    <div class="relative">
      <div class="h-64 bg-cover bg-center w-screen" :style="`background-image: url(https://picsum.photos/id/${props.post.id}/500/1024)`">
        <div class="absolute inset-0 flex items-center justify-center">
          <h2 class="text-2xl font-bold text-white text-shadow-lg relative z-10 p-4 text-center">{{ props.post.title }}</h2>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
    <p class="p-4 max-w-screen-xl mx-auto">{{ props.post.body }}</p>
  </div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'

import { type Post } from '@/types'

const props = defineProps<{
  post: Post;
}>()
</script>
