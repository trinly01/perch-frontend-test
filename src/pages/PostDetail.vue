<template>
  <div>
    <v-post v-if="post.id" :post="post" />
    <div v-else-if="loading" class="flex items-center justify-center p-4">
      <div>Loading...</div>
    </div>
    <div v-else class="flex items-center justify-center p-4">
      <NotFound />
    </div>
    <div class="p-4">
      <button @click="prevPost" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-4 mr-2">
        Previous Post
      </button>
      <button @click="nextPost" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-4">
        Next Post
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/stores/posts';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VPost from '@/components/VPost.vue';
import NotFound from '@/pages/NotFound.vue';

const store = usePostStore();
const route = useRoute();
const router = useRouter()

// const postId = parseInt(route.params.id);

const loading = ref(true)

onMounted(async() => {
  console.log('route.params.id', route.params.id)
  const postId = parseInt(route.params.id.toString());
  let currentIndex = store.posts.findIndex((post) => post.id === postId);
  console.log('currentIndex', currentIndex)
  try {
    if (currentIndex < 0 ) await store.fetchPostById(postId);
    else store.setCurrentIndex(currentIndex)
  } catch (error) {
    loading.value = false
  }
  // loading.value = false
})

const post = computed(() => {
  // const postId = parseInt(route.params.id);
  // let currentIndex = store.posts.findIndex((post) => post.id === postId) || store.currentIndex;
  // if (currentIndex < 0) {
  //   store.fetchPostById(store.currentIndex);
  //   store.setCurrentIndex(currentIndex);
  // }
  // console.log(currentIndex)
  return store.posts[store.currentIndex] || { id: undefined }
  // return data;
});

// const currentPost = computed(() => store.posts[store.currentIndex]);


const prevPost = async () => {
  await store.previousPost();
  console.log(route)
  router.push('/post/'+store.posts[store.currentIndex].id)
};

const nextPost = async () => {
  await store.nextPost();
  router.push('/post/'+store.posts[store.currentIndex].id)
};
</script>
