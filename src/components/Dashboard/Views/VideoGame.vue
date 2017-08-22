<template>
  <v-card class="grey lighten-4">
    <v-card-text>

      <div class="content">
        <google-youtube
          video-id="g_s17HMFaug"
          height="270px"
          width="480px"
          rel="0"
          start="5"
          autoplay="1">
        </google-youtube>
      </div>

    </v-card-text>

  </v-card>
</template>

<script>
  // Polymer youtube player component
  import 'google-youtube/google-youtube.html';

  export default {
    data() {
      return {
        loading: false,
      };
    },
    methods: {
      playRound() {

      },
    },
  };
</script>

<style>

</style>
