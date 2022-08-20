<template>
  <div id="about">
    <Transition name="slide-project">
      <div class="flex" v-if="reveal">
        <div class="text">
          <p>
            I am a challenge driven front-end developer with a true passion for all
            digital experiences. I designed and builded multiples web projects
            such as showcase sites, WordPress themes and SaaS platforms. Solution
            oriented and always willing to learn something new !
          </p>
          <a href="mailto:colpeetermans@gmail.com" target="_blank">
            <button class="call-to-action">
              <span><i class="fas fa-arrow-right"></i> Contact</span>
            </button></a
          >
        </div>
        <div class="background-element"></div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      reveal: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.reveal = true;
    }, 300);
  },
};
</script>
