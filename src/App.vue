<template>
  <NavigationElement />

  <router-view />
</template>


<script>
import NavigationElement from "@/components/NavigationElement.vue";

export default {
  components: { NavigationElement },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import "./assets/sass/style.scss";

</style>
