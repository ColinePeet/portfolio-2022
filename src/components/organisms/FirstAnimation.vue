<template>
  <div id="animation">
    <transition name="title-reveal">
      <h1 v-if="show">Coline Peetermans</h1>
    </transition>
    <transition name="bg-reveal">
      <div class="background-element" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["toggleMenu"],
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  },
};
</script>

<style scoped lang="scss">
.bg-reveal-enter-active {
  transition: all 1s ease;
}
.bg-reveal-enter-from {
  transform: scale(0.5);
}

.title-reveal-enter-active {
  transition: all 2s ease;
}
.title-reveal-enter-from {
  transform: scale(0.5);
    opacity: 0;
}

#animation {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  z-index: 1;
  h1 {
    z-index: 1;
  }
  .background-element {
    background: radial-gradient(
      circle at center,
      #d7d8ed 0,
      white 60%
    ) !important;
    width: 1000px;
    height: 1000px;
    border-radius: 100%;
    position: absolute;
    top: calc(50% - 500px);
    left: calc(50% - 500px);
  }
}
</style>