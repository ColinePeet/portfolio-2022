<template>
  <section id="projects">
    <ProjectContent :currentProject="projects[n]" />

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

    <div class="background-element"></div>
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
    },
    toPrevious() {
      this.n <= 0 ? (this.n = this.projects.length - 1) : (this.n -= 1);
    },
  },
};
</script>

