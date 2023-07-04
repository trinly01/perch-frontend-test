<template>
  <div>
    <header class="fixed top-0 left-0 w-full bg-blue-500 py-4 px-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <span class="text-white font-bold mr-2">I 💌</span>
        <img src="https://images.squarespace-cdn.com/content/v1/6321f086e7cc2a366b6b0478/6410b9bf-c37e-4982-9d86-dbf1f8cde4d8/Logo.png?format=1500w" alt="Perch Logo" class="h-8">
      </router-link>
      <a href="https://github.com/trinly01/perch-frontend-test/" target="_blank" rel="noopener noreferrer" class="text-white">
        <i class="fa-brands fa-github"></i>
        <span class="hidden sm:inline pl-2">Trinmar Boado</span>
      </a>
    </header>
    <main class="mt-16 flex items-center justify-center">
      <router-view />
    </main>
  </div>
</template>


<script setup lang="ts">
import { usePostStore } from '@/stores/posts';
import { onMounted } from 'vue';

const store = usePostStore();

onMounted(async () => {
  await store.fetchPosts();
});
</script>

<style scoped>
.fa-github {
  font-size: 20px;
  margin-left: 10px;
}
</style>
