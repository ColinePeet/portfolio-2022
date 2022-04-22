<template>
  <section id="projects">
    <Transition name="slide-fade">
      <ProjectContent :currentProject="projects[n]" v-if="show" />
    </Transition>

    <div class="navigation-projects">
      <button @click="toPrevious()">Previous project</button>
      <button @click="toNext()">Next project</button>
    </div>

    <div class="navigation-arrows">
      <button @click="toPrevious()"><i class="fas fa-arrow-left"></i></button>
      <button @click="toNext()">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <Transition name="background-fade">
      <div class="background-element" v-if="show"></div>
    </Transition>
  </section>
</template>

<script>
import ProjectContent from "@/components/organisms/ProjectContent";
import projects from "@/store/projects.js";

export default {
  components: { ProjectContent },
  data: function () {
    return {
      n: 0,
      show: true,
    };
  },
  computed: {
    projects() {
      return projects;
    },
  },
  methods: {
    toNext() {
      this.n >= this.projects.length - 1 ? (this.n = 0) : (this.n += 1);
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 700);
    },
    toPrevious() {
      this.n <= 0 ? (this.n = this.projects.length - 1) : (this.n -= 1);
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: 1.2s all cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-fade-leave-active {
  transition: .8s all cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: scale(1.2);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: scale(.8);
}



.background-fade-enter-active {
  transition: .6s all ease-in-out; /*good for text */
  transition-delay: .5s;
}

.background-fade-leave-active {
  transition: 1s all cubic-bezier(0.77, 0, 0.175, 1); 
}

.background-fade-enter-from {
  opacity: 0;
  transform: scale(.8) translateX(100px);
}
.background-fade-leave-to {
  opacity: 0;
  transform: scale(.8) translateX(200px);
}



</style>