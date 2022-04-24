<template>
  <HeaderElement :toggleMenu="toggleMenu" :showMenu="showMenu" />
  <transition name="menu-fade">
    <MenuNav :toggleMenu="toggleMenu" v-if="showMenu" />
  </transition>

  <transition name="fade-reveal">
    <FirstAnimation v-if="revealAnimation" />
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
      revealAnimation: true,
    };
  },
  methods: {
    toggleMenu() {
      console.log("ici");
      this.showMenu = !this.showMenu;
    },
  },
  mounted() {
    setTimeout(() => {
      this.revealAnimation = false
    }, 2000)
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import "./assets/sass/style.scss";

.menu-fade-enter-active {
  transition: all 0.5s ease;
}
.menu-fade-leave-active {
  transition: all 0.5s ease;
}
.menu-fade-enter-from {
  transform: translateX(100px);
  opacity: 0;
}
.menu-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}



.fade-reveal-leave-active {
  transition: all .8s ease;
}
.fade-reveal-leave-to {
  opacity: 0;
}
</style>
