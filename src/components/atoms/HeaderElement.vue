<template>
  <div class="header">
    <h1>Coline Peetermans</h1>
    <transition name="menu-fade">
    <button @click="toggleMenu()" v-show="!showMenu">Menu</button>
    </transition>
  </div>
</template>

<script>
export default ({
    props: ['toggleMenu', 'showMenu'],
})
</script>