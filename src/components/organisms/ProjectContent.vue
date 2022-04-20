<template>
  <div class="project">
    <div class="englobe-title">
      <h2>{{ currentProject.title }}</h2>
      <p>{{ currentProject.type }}</p>
    </div>
    <div class="img">
      <img :src="currentProject.image" alt="project" class="project-img" />
      <div class="links">
        <img src="@/assets/img/logo_git.png" alt="git" />
        <button><i class="fas fa-arrow-right"></i>Visit website</button>
      </div>
    </div>
    <p class="description">
      {{ currentProject.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["currentProject"],
};
</script>