<template>
  <div class="container flex flex-col text-center justify-center">
    <h3 class="types-title neon-title text-6xl flex justify-center">
      Store
      <header class="shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <router-link to="/cart">
            <h1
              class="mt-10 ml-2 bg-green-400/50  rounded-xl fixed top-0 left-0 text-3xl font-bold leading-tight text-gray-900 flex"
            >
              <carbon-shopping-cart /> {{ counter }}
            </h1>
          </router-link>
        </div>
      </header>
    </h3>
    <div class="grid grid-cols-1 grid-rows-6 place-items-center">
      <div class="card grid-row-1 flex flex-col justify-center">
        <img class="img flex justify-center " src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80">
        <h4 class="neon-sub text-4xl mt-2">
          Monstera Deliciosa  $55
        </h4>
        <h4 class="mt-4 price neon-sub text-stroke-md text-4xl">
          <carbon-shopping-cart-plus class="ctn" @click="counter ++" />
        </h4>
        <p>--small house plant in 3 gallon potted plant--</p>
      </div>
      <div class="card grid-row-2">
        <img class="img" src="https://images.unsplash.com/photo-1609340942215-4f9bfe38593f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80">
        <h4 class="neon-sub text-4xl mt-2">
          Anthurium Clarinervium  $45
        </h4>
        <h4 class="mt-4 price neon-sub text-stroke-md text-4xl">
          <carbon-shopping-cart-plus class="ctn" @click="counter ++" />
        </h4>
        <p>--small house plant in 3 gallon potted plant--</p>
      </div>
      <div class="card grid-row-3">
        <img class="img" src="https://images.unsplash.com/photo-1612363228106-c94b0754e2c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80">
        <h4 class="neon-sub text-4xl mt-2">
          Mini Monstera  $30
        </h4>
        <h4 class="mt-4 price neon-sub text-stroke-md text-4xl">
          <carbon-shopping-cart-plus class="ctn" @click="counter ++" />
        </h4>
        <p>--small house plant in 3 gallon potted plant--</p>
      </div>
      <div class="card">
        <img class="img" src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
        <h4 class="neon-sub text-4xl mt-2">
          Snake Plant  $50
        </h4>
        <h4 class="mt-4 price neon-sub text-stroke-md text-4xl">
          <carbon-shopping-cart-plus class="ctn" @click="counter ++" />
        </h4>
        <p>--small house plant in 3 gallon potted plant--</p>
      </div>
      <!-- <div class="card">
        <img class="img" src="https://images.unsplash.com/photo-1603436326446-74e2d65f3168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=471&q=80">
        <h4 class="neon-sub text-4xl mt-2">
          Caladium  $25
        </h4>
        <h4 class="mt-4 price neon-sub text-stroke-md text-4xl">
          <carbon-shopping-cart-plus class="ctn" @click="counter ++" />
        </h4>
        <p>--small house plant in 3 gallon potted plant--</p>
      </div> -->
    </div>
    <ul class="types">
      <li class="types-item justify-center flex">
        <img class="flex justify-center" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Deliciosa
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Borsigniana
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Variegata
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Adansonii
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Pinnatipartita
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Dubia
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Siltepecana
      </li>
      <li class="types-item justify-center flex mt-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Monstera Obliqua
      </li>
      <li class="types-item justify-center flex mt-4 mb-4">
        <img class="mr-2" src="../../src/assets/Leaf.png" height="25px" width="25px">Rhaphidophora Tetrasperma
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
</script>

<style scoped>
.card {
font-size: 24px;
width: 100%;
/* background-color: var(--prm5); */
color: var(--prm);
border-radius: 2%;
border: 2px solid var(--prm);
margin-top: 10px;
overflow: hidden;
}
.ctn:active {
  transform: translateY(10px);
  opacity: 0.5;
}
/* .card:active {
  background-color: var(--drk4)
} */
.img {

  }
.title {}
.details {
  margin-top: -600px;
}
@media (min-width: 425px) {

}

</style>

<route lang="yaml">
meta:
  layout: home
</route>
