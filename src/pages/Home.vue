<template>
  <div>
    <h2 class="text-2xl font-bold">Posts</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
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
