<template>
  <transition name="header">
    <div class="header" v-if="reveal">
      <h1 @click="setAnimation()">Coline Peetermans</h1>
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
  methods: {
    setAnimation() {
      sessionStorage.clear();
      location.reload();
    },
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 300);
  },
};
</script>