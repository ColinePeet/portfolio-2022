<template>
  <div id="about">
    <Transition name="slide-project">
      <div class="flex" v-if="reveal">
        <!-- <div class="picture">
        <img
          src="https://scontent.fbru4-1.fna.fbcdn.net/v/t39.30808-6/278670378_10160820934025839_5985026310559284514_n.jpg?stp=dst-jpg_s526x395&_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pRk4jBodAqMAX_C9U-J&_nc_ht=scontent.fbru4-1.fna&oh=00_AT_wsiVVv-gHl1iXG9v142NTZcUhCQfeJyoVDsT2ORIqYQ&oe=627345B1"
          alt=""
        />
      </div> -->
        <div class="text">
          <p>
            I am a front-end developer with a true passion for digital
            experiences. I have more than 3 years of experience in designing and
            building web projects such as showcase sites, wordpress themes and
            platforms.
          </p>
          <button class="call-to-action">
            <span><i class="fas fa-arrow-right"></i> Contact</span>
          </button>
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
