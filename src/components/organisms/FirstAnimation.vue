<template>
  <div id="reveal">
    <transition name="title-reveal">
      <h1 v-if="reveal">Coline Peetermans</h1>
    </transition>
    <transition name="bg-reveal">
      <div class="background-element" v-if="reveal"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["toggleMenu"],
  data() {
    return {
      reveal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 100);
  },
};
</script>
