<template>
  <transition name="header" :class="{ 'white-bg' : $store.state.headerOpacity}">
    <div class="header" v-if="reveal">
      <h1 @click="$router.push('/').catch(() => {})">Coline Peetermans</h1>
      <transition name="menu">
        <button @click="toggleMenu()" v-show="!showMenu">Menu</button>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["toggleMenu", "showMenu"],
  data() {
    return {
      reveal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 50);
  },
};
</script>