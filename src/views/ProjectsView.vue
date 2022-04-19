<template>
  <section id="projects">

    <div class="project">
      <div class="englobe-title">
        <h2>{{currentProject.title}}</h2>
        <p>{{currentProject.type}}</p>
      </div>
      <div class="img">
        <img :src="currentProject.image" alt="project" class="project-img" />
        <div class="links">
          <img src="@/assets/img/logo_git.png" alt="git">
          <button><i class="fas fa-arrow-right"></i>Visit website</button>
        </div>
      </div>
      <p class="description">
        {{currentProject.description}}
      </p>
    </div>

    <div class="navigation-projects">
      <button>Previous project</button>
      <button>Next project</button>
    </div>

    <div class="navigation-arrows">
      <button><i class="fas fa-arrow-left"></i></button>
      <button><i class="fas fa-arrow-right"></i></button>
    </div>

    <div class="background-element"></div>
  </section>
</template>

<script>
import projects from "@/store/projects.js";

export default {
  data: function() {
    return {};
  },
  computed: {
    currentProject() {
      return this.projects[0]
    },
    projects() {
      return projects;
    }
  }
};
</script>