<template>
  <div class="project">
    <!-- title -->
    <Transition name="slide-title">
      <div class="englobe-title" v-if="reveal" >
        <h2>{{ currentProject.title }}</h2>
        <p>{{ currentProject.type }}</p>
      </div>
    </Transition>


    <!-- img / video -->
    <div class="img">
      <!-- <img :src="currentProject.image" alt="project" class="project-img" /> -->
      <video width="700" id="video" muted loop class="project-img">
        <source :src="currentProject.image" type="video/mp4" />
      </video>

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

  </div>
</template>

<script>
export default {
  props: ["currentProject"],
  data: function () {
    return {
      reveal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 300);
    setTimeout(() => {
      document.getElementById("video").play();
    }, 5000);
  },
};
</script>
