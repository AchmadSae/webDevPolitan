<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import HelloWorld from './components/HelloWorld.vue'
import Products from './components/Products.vue'


  // Rest of your component code
</script>

<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
          store Ahmad {{ cart.name }}
        </a>
        <div class="nums d-flex">
          <p class="mx-2 m-auto p-1">
            <Icon icon="icon-park-solid:shopping-cart-add" width="30" height="25" /> {{ cart.length }}
          </p>
          <p class="mx-2 my-auto p-1" @click="style.convertDisplay = !style.convertDisplay" >
            <Icon icon="ri:ai-generate"/>
          </p>
        </div>
      </div>
    </nav>
    <div class="wrapper">
      <HelloWorld msg="Make an your Shop is change the main . Be Your Waer" />
    </div>
  </header>

  <main>
    <Products />
  </main>
</template>
<style scoped>
.nums p {
  font-weight: bolder;
  width: 4em;
  text-align: center;
  cursor: pointer;
}

.nums p:hover {
  border-radius: 5px;
  background-color: hsla(160, 100%, 37%, 1);
}

.wrapper {
  text-align: center;
}
</style>