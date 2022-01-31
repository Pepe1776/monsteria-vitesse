<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  title: 'Monsteria',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <h1 class="animate-pulse neon-title text-7xl justify-center flex ">
    Monsteria
  </h1>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Arizonia";
  src: url("./assets/Arizonia-Regular.ttf");
}
.neon-title {
  font-family: "Arizonia";
  /* background-color: rgba(1, 119, 7, 0.171); */
 text-shadow: 0 0 3vw #23ff23;
 animation: flux 3s linear infinite;
 moz-animation: flux 3s linear infinite;
 -webkit-animation: flux 3s linear infinite;
 -o-animation: flux 3s linear infinite;
}
.neon-sub {
  /* font-family: "Arizonia"; */
  /* background-color: rgba(1, 119, 7, 0.171); */
 text-shadow: 0 0 3vw #23ff23;
 animation: flux 3s linear infinite;
 moz-animation: flux 3s linear infinite;
 -webkit-animation: flux 3s linear infinite;
 -o-animation: flux 3s linear infinite;
}
/* keyframe */
@keyframes flux {
0%,
100% {
text-shadow: 0 0 1vw #03941b;
color: #00ff2a;
}
50% {
text-shadow: 0 0 0.5vw #026e0b;
color: #357c06;
}
}

@keyframes flicker {
0%,
18%,
22%,
25%,
53%,
57%,
100% {
text-shadow: 0 0 4px $primary-blue, 0 0 11px $primary-blue, 0 0 19px $primary-blue,
0 0 40px $primary-blue;
}

20%,
24%,
55% {
text-shadow: none;
}
}

</style>
