<template>
  <div class="p-4">
    <!-- <h2 class="text-2xl font-bold">Posts</h2> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl">
      <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow-md p-4">
        <router-link :to="`/post/${post.id}`">
          <img :src="`https://picsum.photos/id/${post.id}/200/300`" alt="Post Image" class="w-full h-48 object-cover mb-4">
          <h3 class="text-xl fo''nt-bold">{{ post.title }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/posts';
import { computed } from 'vue';
// import { RouteLocationNormalizedLoaded } from 'vue-router';

const store = usePostStore();

// const posts = store.posts;
const posts = computed(() => store.posts)
</script>
