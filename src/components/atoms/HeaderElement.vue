<template>
  <div class="header">
    <h1>Coline Peetermans</h1>
    <button @click="toggleMenu()" v-show="!showMenu">Menu</button>
  </div>
</template>

<script>
export default ({
    props: ['toggleMenu', 'showMenu'],
})
</script>