<template>
  <div class="bg-white font-sans">
    <h2 class="text-2xl font-bold mb-4 text-blue-600">
      <router-link :to="`/post/${props.post.id}`">{{ props.post.title }}</router-link>
    </h2>
    <p>{{ props.post.body }}</p>
  </div>
</template>



<script setup lang="ts">
// import { defineProps } from 'vue'

import Post from '@/types'

const props = defineProps<{
  post: Post;
}>()
</script>
