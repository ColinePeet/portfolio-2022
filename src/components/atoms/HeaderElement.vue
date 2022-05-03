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
    async setAnimation() {
      sessionStorage.clear();

      await this.$router.push("/").catch(() => {});
      location.reload();
      console.log(this.$router);
    },
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 300);
  },
};
</script>