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
  <Splide />
  <!-- <Thumb /> -->
</template>

<route lang="yaml">
meta:
  layout: home
</route>
