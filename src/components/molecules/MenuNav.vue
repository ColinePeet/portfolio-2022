<template>
  <div id="menu">
    <button @click="toggleMenu()" class="close">
      <span></span>
      <span></span>
    </button>
    <transition name="menu-fade">
      <div v-if="show" class="nav">
        <nav>
          <ul>
            <li>
              <router-link to="/">Projects</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <button class="download">
                <i class="fas fa-arrow-down"></i> Resume
              </button>
            </li>
          </ul>
        </nav>
        <div class="links">
          <div><a>Github</a></div>
          <div><a>LinkedIn</a></div>
          <div><a>Contact</a></div>
        </div>
      </div>
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
    }, 300);
  },
};
</script>

<style scoped>
.zoom-menu-enter-active {
  transition: all .8s ease;
}
.zoom-menu-leave-active {
  transition: all .8 ease;
}
.zoom-menu-enter-from {
  transform: scale(0.8);
  opacity: 0;
}
.zoom-menu-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>