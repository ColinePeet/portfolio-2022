<template>
  <div class="project">
    <!-- title -->
    <Transition name="slide-title">
      <div class="title" v-if="reveal" ref="title">
        <p>{{ currentProject.type }}</p>
        <h2>{{ currentProject.title }}</h2>
      </div>
    </Transition>

    <!-- img / video -->
    <div class="img">
      <div class="englobe-screen">
        <Transition name="screen-slide">
          <template v-if="currentScreen">
            <video width="700" id="video" muted loop webkit-playsinline playsinline class="project-img">
              <source :src="currentProject.image[n]" type="video/mp4" />
            </video>
          </template>
        </Transition>
      </div>
    </div>

    <!-- description -->
    <div class="content">
      <Transition name="slide-content">
        <div class="description" v-if="revealContent">
          <p>
            {{ currentProject.description }}
          </p>
        </div>
      </Transition>

      <Transition name="slide-content">
        <div class="details" v-if="revealContent">
          <div class="navigation-arrows" >
            <button @click="toPrevious()" v-if="currentProject.image.length > 1">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button @click="toNext()" v-if="currentProject.image.length > 1">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <div class="links" v-if="reveal">
            <a
              :href="currentProject.website_link"
              target="_blank"
              v-if="currentProject.website_link"
              class="website-link"
            >
              <i class="fas fa-chevron-right"></i> Visit website
            </a>
            <a
              :href="currentProject.repo_link"
              target="_blank"
              v-if="currentProject.repo_link"
            >
              <img src="@/assets/img/logo_git.png" alt="git" />
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentProject"],
  data: function () {
    return {
      reveal: false,
      revealContent: false,
      n: 0,
      currentScreen: true,
      titleFromTop: 0,
    };
  },
  watch: {
    n() {
      document.getElementById("video").pause();
      this.currentScreen = false;
      setTimeout(() => {
        this.currentScreen = true;
      }, 500);
      setTimeout(() => {
        document.getElementById("video").play();
      }, 600);
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
    scrollEvent() {
      if (this.$refs.title) {
        let scrolled = window.scrollY;
        if (scrolled > this.titleFromTop) {
          this.$store.commit("set_header_opacity", true);
        } else {
          this.$store.commit("set_header_opacity", false);
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 300);
    setTimeout(() => {
      this.revealContent = true;
    }, 800);
    setTimeout(() => {
      document.getElementById("video").play();
    }, 1500);

    if (this.$refs.title) {
      let distance = this.$refs.title.offsetTop;
      this.titleFromTop = distance;
    }
  },
};
</script>
