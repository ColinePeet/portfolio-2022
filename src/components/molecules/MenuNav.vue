<template>
  <div id="menu">
    <button @click="toggleMenu()" class="close">
      <span></span>
      <span></span>
    </button>

    <transition name="menu">
      <div v-if="show" class="nav">
        <nav>
          <ul>
            <li :class="{'active' : $route.path === '/'}">
              <router-link to="/" @click="toggleMenu()">Projects</router-link>
            </li>
            <li :class="{'active' : $route.path === '/about'}">
              <router-link to="/about" @click="toggleMenu()">About</router-link>
            </li>
            <li>
              <a href="cv.pdf" download>
                <button class="download">
                  <i class="fas fa-chevron-down"></i> Resume
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <div class="links">
          <div><a href="https://github.com/ColinePeet" target="_blank">Github</a></div>
          <div><a href="https://www.linkedin.com/in/coline-peetermans-991830157" target="_blank">LinkedIn</a></div>
          <div><a href="mailto:colpeetermans@gmail.com" target="_blank">Contact</a></div>
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
