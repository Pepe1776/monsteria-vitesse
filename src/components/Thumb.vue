<template>
  <div class="wrapper">
    <Splide
      ref="main"
      :options="mainOptions"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>

    <Splide
      ref="thumbs"
      :options="thumbsOptions"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script lang="ts">
import type { Options } from '@splidejs/splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { defineComponent, onMounted, ref } from 'vue'
import { generateSlides } from '../utils/generateSlides'
export default defineComponent({
  name: 'ThumbnailsExample',
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const main = ref<InstanceType<typeof Splide>>()
    const thumbs = ref<InstanceType<typeof Splide>>()
    const slides = generateSlides()
    const mainOptions: Options = {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pagination: false,
    }
    const thumbsOptions: Options = {
      type: 'slide',
      rewind: true,
      gap: '1rem',
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: 'center',
      isNavigation: true,
      updateOnMove: true,
    }
    onMounted(() => {
      const thumbsSplide = thumbs.value?.splide
      if (thumbsSplide)
        main.value?.sync(thumbsSplide)
    })
    return {
      slides,
      main,
      thumbs,
      mainOptions,
      thumbsOptions,
    }
  },
})
</script>
