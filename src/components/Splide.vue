<script lang="ts">
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
})

</script>

<template>
  <Splide :options="{ rewind: true, hasSliderWrapper: true, perPage: 2, }">
    <SplideSlide>
      <img class="img1 blend-multiply" src="https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" label="Mostera $50" alt="Sample 1">
      <h2 class="mb-6 text-2xl neon-sub">
        (Monstera Deliciosa $50)
      </h2>
    </SplideSlide>
    <SplideSlide>
      <img class="img2" src="https://images.unsplash.com/photo-1629271472424-c5012ccde06b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Sample 2">
      <h2 class="mb-6 text-2xl neon-sub">
        (Monstera Adonsonii $50)
      </h2>
    </SplideSlide>
    <SplideSlide>
      <img class="img2" src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?cs=srgb&dl=pexels-huy-phan-3125195.jpg&fm=jpg" alt="Sample 2">
      <h2 class="mb-6 text-2xl neon-sub">
        (Monstera Deliciosa $50)
      </h2>
    </SplideSlide>
    <SplideSlide>
      <img class="img2" src="https://images.pexels.com/photos/6297518/pexels-photo-6297518.jpeg?cs=srgb&dl=pexels-julia-volk-6297518.jpg&fm=jpg" alt="Sample 2">
      <h2 class="mb-6 text-2xl neon-sub">
        (Monstera Deliciosa $500)
      </h2>
    </SplideSlide>
    <SplideSlide>
      <img class="img2" src="https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?cs=srgb&dl=pexels-huy-phan-3125197.jpg&fm=jpg" alt="Sample 2">
      <h2 class="mb-6 text-2xl neon-sub">
        (Thai Constellation $1500)
      </h2>
    </SplideSlide>
    <SplideSlide>
      <img class="img2" src="https://images.pexels.com/photos/4484186/pexels-photo-4484186.jpeg?cs=srgb&dl=pexels-huy-phan-4484186.jpg&fm=jpg" alt="Sample 2">
      <h2 class="mb-6 text-2xl neon-sub">
        (Thai Constellation $1500)
      </h2>
    </SplideSlide>
  </Splide>
</template>

<style>
.img1 {
/* width: 500px;
height: 500px; */
display: flex;
justify-content: center;
border-radius: 10%;
}
.img2 {
/* width: 500px;
height: 500px; */
display: flex;
justify-content: center;
border-radius: 10%;
}
</style>
