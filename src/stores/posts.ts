import { defineStore } from 'pinia';
import axios from 'axios';
import { Post } from '@/types';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
    currentIndex: -1,
  }),
  actions: {
    async fetchPosts() {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      this.posts = data;
    },
    async fetchPostById(id: number) {
      // Check if the post already exists in the store
      if (this.posts.some(post => post.id === id)) {
        return;
      }

      const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
      this.posts.push(data);
      console.log('pushed', data)

      this.currentIndex = this.posts.findIndex(post => post.id === data.id);
      
    },
    setCurrentIndex(index: number) {
      this.currentIndex = index;
    },
    async previousPost() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    async nextPost() {
      console.log(this.posts.length)
      if (this.currentIndex < this.posts.length - 1) {
        this.currentIndex++;
      }
    },
  },
});
