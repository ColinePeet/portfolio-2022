<template>
  <section id="projects">
    <Transition name="slide-project">
      <ProjectContent :currentProject="projects[n]" v-if="reveal" />
    </Transition>

    <transition name="header">
      <div class="navigation-projects" v-if="elementsReveal">
        <button @click="toPrevious()"><i class="fas fa-arrow-left"></i><span>Previous project</span></button>
        <button @click="toNext()"><span>Next project</span><i class="fas fa-arrow-right"></i></button>
      </div>
    </transition>

    <Transition name="background-project">
      <div
        class="background-element"
        v-if="reveal"
        :style="`background: radial-gradient(circle at center, ${projects[n].background_color} 0, white 60%)`"
      ></div>
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
      reveal: false,
      elementsReveal: false,
    };
  },
  computed: {
    projects() {
      return projects;
    },
  },
  watch: {
    n() {
      this.reveal = false;
      setTimeout(() => {
        this.reveal = true;
      }, 700);
    },
  },
  methods: {
    toNext() {
      this.n >= this.projects.length - 1 ? (this.n = 0) : (this.n += 1);
    },
    toPrevious() {
      this.n <= 0 ? (this.n = this.projects.length - 1) : (this.n -= 1);
    },
  },
  mounted() {
    setTimeout(() => {
      this.elementsReveal = true;
    }, 300);
    setTimeout(() => {
      this.reveal = true;
    }, 300);
  },
};
</script>
