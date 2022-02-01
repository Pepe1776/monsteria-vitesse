<script setup lang="ts">
import '../components/Splide.vue'
import { useUserStore } from '~/stores/user'
import '../components/Thumb.vue'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="section">
    <h3 class="neon-sub text-5xl mb-10">
      Core Team
    </h3>
    <div class="about">
      <h4 class="name neon-sub text-3xl">
        Jessica Pazton
      </h4>
      <h5 class="neon-sub text-2xl mt-1">
        Owner
      </h5>
      <div class="flex">
        <img class="mt-8 p-2" src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <p class="desc neon-sub p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta fuga eveniet ent a consequatur facere odit eius? Quasi suscipit dolores, reprehenderit iure, omnis sunt numquam exercitationem cumque voluptate consectetur laboriosam impedit beatae?
        </p>
      </div>
    </div>
    <div class="about">
      <h4 class="name neon-sub text-3xl">
        Poe Brandon
      </h4>
      <h5 class="neon-sub text-2xl mt-1">
        Horticulturalist
      </h5>
      <div class="flex">
        <img class="mt-8 p-2" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1871&q=80">
        <p class="desc neon-sub p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta fuga eveniet ent a consequatur facere odit eius? Quasi suscipit dolores, reprehenderit iure, omnis sunt numquam exercitationem cumque voluptate consectetur laboriosam impedit beatae?
        </p>
      </div>
    </div>
    <div class="about">
      <h4 class="name neon-sub text-3xl">
        Sage Odoyle
      </h4>
      <h5 class="neon-sub text-2xl">
        Propagation
      </h5>
      <div class="flex">
        <img class="mt-8 p-2" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80">
        <p class="desc neon-sub p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta fuga eveniet ent a consequatur facere odit eius? Quasi suscipit dolores, reprehenderit iure, omnis sunt numquam exercitationem cumque voluptate consectetur laboriosam impedit beatae?
        </p>
      </div>
    </div>
  </div>
  <h3 class="neon-title text-5xl mt-5 mb-5">
    Specimen Plants
  </h3>
  <Splide />
  <!-- <Thumb /> -->
</template>
<style scoped>
.about {
border: 1px solid var(--prm);
border-radius: 10%;
}
.about:active {
  background-color: var(--prm);
}
img {
  width: 30%;
  height: 130px;
  border-radius: 50%;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
