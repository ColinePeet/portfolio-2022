<template>
  <transition name="reveal">
    <FirstAnimation v-if="revealAnimation" />
  </transition>

  <HeaderElement
    :toggleMenu="toggleMenu"
    :showMenu="showMenu"
    v-if="!revealAnimation"
  />
  <transition name="menu">
    <MenuNav :toggleMenu="toggleMenu" v-if="showMenu" />
  </transition>

  <router-view v-if="!revealAnimation" />
</template>


<script>
import HeaderElement from "@/components/atoms/HeaderElement";
import MenuNav from "@/components/molecules/MenuNav";
import FirstAnimation from "@/components/organisms/FirstAnimation";

export default {
  components: { HeaderElement, MenuNav, FirstAnimation },
  data() {
    return {
      showMenu: false,
      revealAnimation: sessionStorage.getItem("first-animation") ? false : true,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    setTimeout(() => {
      sessionStorage.setItem("first-animation", false);
      this.revealAnimation = false;
    }, 2000);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import "./assets/sass/style.scss";
</style>
