<template>
  <div class="header">
    <h1 @click="setAnimation()">Coline Peetermans</h1>
    <transition name="menu">
      <button @click="toggleMenu()" v-show="!showMenu">Menu</button>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["toggleMenu", "showMenu"],
  methods: {
    setAnimation() {
      sessionStorage.clear();
      location.reload();
    },
  },
};
</script>