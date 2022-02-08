<script setup lang="ts">
// import { defineAsyncComponent } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'
import type { DisplayCart } from '~/types/interfaces'

const cartStore = useCartStore()
const { cart, displayCart } = storeToRefs(cartStore)

onMounted(() => {
  cartStore.loadInstance()
  cartStore.displayCartLoad()
})
const total = computed(() => {
  const sum = (displayCart.value as DisplayCart[]).reduce((initialSum: number, item: DisplayCart) => {
    if (item.inStock)
      initialSum = initialSum + (item.price * item.qty)
  }, 0)
  return { cart, sum}
})

function removeItem(id: number) {
  cartStore.removeFromCart(id)
}
// const Title = defineAsyncComponent(() => import (/*webpackChunkName: "title" */ '../components/Title.vue'))
</script>

<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in displayCart" :key="index">
      <div v-if="item.inStock">
        <div>{{ item.name }}</div>
        <div>{{ item.currency }}{{ item.price }}</div>
        <div>{{ item.qty }}</div>
      </div>
      <!-- <div v-else="{{'Item ${item.name} was in stock when you added in the cart but i snow out of stock' }}" /> -->
      <button @click="removeItem(item.id)">
        remove
      </button>
    </div>
    <div>Total {{ total }}</div>
  </div>
</template>
