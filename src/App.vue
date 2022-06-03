<template>
  <HeaderElement
    :toggleMenu="toggleMenu"
    :showMenu="showMenu"
  />
  <transition name="menu">
    <MenuNav :toggleMenu="toggleMenu" v-if="showMenu" />
  </transition>

  <router-view />
</template>


<script>
import HeaderElement from "@/components/atoms/HeaderElement";
import MenuNav from "@/components/molecules/MenuNav";

export default {
  components: { HeaderElement, MenuNav },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import "./assets/sass/style.scss";
</style>
