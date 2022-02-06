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
  <Footer />
  <router-link to="/">
    <h1 class="neon-title text-7xl justify-center flex ">
      Monsteria
    </h1>
  </router-link>
  <router-view />
</template>

<style>
//Css Variables
* {
  --lit: #e9f9ef;
  --prm5: #99e2b4;
  --prm4: #88d4ab;
  --prm3: #78c6a3;
  --prm2: #67b99a;
  --prm1: #56ab91;
  --prm: #469d89;
  --drk: #358f80;
  --drk2: #248277;
  --drk3: #14746f;
  --drk4: #036666;
  --drkx: #011e1e;
}

@font-face {
  font-family: "Arizonia";
  src: url("./assets/Arizonia-Regular.ttf");
}
.neon-title {
  font-family: "Arizonia";
  /* background-color: rgba(1, 119, 7, 0.171); */
 text-shadow: 0 0 3vw var(--prm5);
 animation: flux 3s linear infinite;
 moz-animation: flux 3s linear infinite;
 -webkit-animation: flux 3s linear infinite;
 -o-animation: flux 3s linear infinite;
}
.neon-sub {
  /* font-family: "Arizonia"; */
  /* background-color: rgba(1, 119, 7, 0.171); */
 text-shadow: 0 0 3vw var(--prm5);
 animation: flux 3s linear infinite;
 moz-animation: flux 3s linear infinite;
 -webkit-animation: flux 3s linear infinite;
 -o-animation: flux 3s linear infinite;
}
/* keyframe */
@keyframes flux {
0%,
100% {
text-shadow: 0 0 1vw var(--drk);
color: var(--prm);
}
50% {
text-shadow: 0 0 0.5vw var(--drk);
color: var(--prm4);
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
text-shadow: 0 0 4px var(--prm), 0 0 11px var(--prm), 0 0 19px var(--prm),
0 0 40px var(--prm);
}

20%,
24%,
55% {
text-shadow: none;
}
}

</style>
