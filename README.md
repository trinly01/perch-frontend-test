# Perch Frontend Test

Demo: [https://trinly01.github.io/perch-frontend-test/post/1](https://trinly01.github.io/perch-frontend-test/post/1)

## Setup
### Install dependencies
```
npm i
```
### Start the hot-reload dev server
```
npm run serve
```

## Requirements
- Use the [composition api](https://vuejs.org/guide/typescript/composition-api.html) and [TypeScript](https://www.typescriptlang.org/) to write your components.
- Hook up the previous and next buttons in `App.vue` to cycle through posts from jsonplaceholder using [axios](https://www.npmjs.com/package/axios).
- Display the post title and body in `VPost.vue` for the currently active post.

## Bonus points
- Use pinia (it's already installed) to store all posts that are loaded. Then use that store to display already loaded posts.
- Add css styles. (You may install any dependencies you want to use)

## References
- [Vue](https://vuejs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/)


## Deploy
https://dev.to/jelizarovas/comment/22iei

https://stackoverflow.com/questions/76115552/vue-3-vite-not-respecting-base-url-when-routing-route-refresh-produces-404