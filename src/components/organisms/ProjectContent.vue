<template>
  <div class="project">
    <!-- title -->
    <Transition name="slide-title">
      <div class="englobe-title" v-if="reveal">
        <h2>{{ currentProject.title }}</h2>
        <p>{{ currentProject.type }}</p>
      </div>
    </Transition>

    <!-- img / video -->
    <div class="img">
      <div class="englobe-screen">
        <Transition name="screen-slide">
          <template v-if="currentScreen">
            <video width="700" id="video" muted loop class="project-img">
              <source :src="currentProject.image[n]" type="video/mp4" />
            </video>
          </template>
        </Transition>
      </div>

      <!-- links -->
      <Transition name="slide-links">
        <div class="links" v-if="reveal">
          <img src="@/assets/img/logo_git.png" alt="git" />
          <button class="call-to-action">
            <span> <i class="fas fa-arrow-right"></i> Visit website</span>
          </button>
        </div>
      </Transition>
    </div>

    <!-- description -->
    <Transition name="slide-content">
      <p class="description" v-if="reveal">
        {{ currentProject.description }}
      </p>
    </Transition>

    <div class="navigation-arrows">
      <button @click="toPrevious()"><i class="fas fa-arrow-left"></i></button>
      <button @click="toNext()">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentProject"],
  data: function () {
    return {
      reveal: false,
      n: 0,
      currentScreen: false,
    };
  },
  watch: {
    n() {
      document.getElementById("video").pause();
      this.currentScreen = false;
      setTimeout(() => {
        this.currentScreen = true;
      }, 800);
      setTimeout(() => {
        document.getElementById("video").play();
      }, 1200);
    },
  },
  methods: {
    toNext() {
      this.n >= this.currentProject.image.length - 1
        ? (this.n = 0)
        : (this.n += 1);
    },
    toPrevious() {
      this.n <= 0
        ? (this.n = this.currentProject.image.length - 1)
        : (this.n -= 1);
    },
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
      this.currentScreen = true;
    }, 300);
    setTimeout(() => {
      this.currentScreen = true;
    }, 800);
    setTimeout(() => {
      document.getElementById("video").play();
    }, 1500);
  },
};
</script>
