<template>
  <div class="project">
    <Transition name="title-fade">
      <div class="englobe-title" v-if="!showAnimation1">
        <!-- <div v-if="!showAnimation1"> -->
        <h2>{{ currentProject.title }}</h2>
        <p>{{ currentProject.type }}</p>
        <!-- </div> -->
      </div>
    </Transition>
    <div class="img">
      <!-- <img :src="currentProject.image" alt="project" class="project-img" /> -->
      <video width="700" id="video" muted loop class="project-img">
        <source :src="currentProject.image" type="video/mp4" />
      </video>

      <Transition name="links-fade">
        <div class="links" v-if="!showAnimation2">
          <img src="@/assets/img/logo_git.png" alt="git" />
          <button>
            <span> <i class="fas fa-arrow-right"></i> Visit website</span>
          </button>
        </div>
      </Transition>
    </div>
    <Transition name="content-fade">
      <p class="description" v-if="!showAnimation">
        {{ currentProject.description }}
      </p>
    </Transition>
  </div>
</template>

<script>
export default {
  props: ["currentProject"],
  data: function () {
    return {
      showAnimation1: true,
      showAnimation: true,
      showAnimation2: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showAnimation1 = false;
    }, 300);
    setTimeout(() => {
      this.showAnimation = false;
    }, 300);
    setTimeout(() => {
      this.showAnimation2 = false;
    }, 300);
    setTimeout(function () {
      document.getElementById("video").play();
    }, 5000);
  },
};
</script>


<style scoped lang="scss">
// https://cloudconvert.com/mov-converter
.content-fade-enter-active {
  transition: 1s all cubic-bezier(0.77, 0, 0.175, 1);
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.links-fade-enter-active {
  transition: 1.2s all cubic-bezier(0.77, 0, 0.175, 1);
}

.links-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.title-fade-enter-active {
  transition: 1s all cubic-bezier(0.77, 0, 0.175, 1);
}

.title-fade-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
</style>