<template>
  <v-card class="grey lighten-4">

    <v-card-media>
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
    </v-card-media>
    <v-card-text>

      hola

    </v-card-text>

    <v-card-actions>
      <v-btn flat class="orange--text">Share</v-btn>
      <v-btn flat class="orange--text">Explore</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  import VideoStage from 'src/domain/video-stage';
  // Polymer youtube player component
  import 'google-youtube/google-youtube.html';

  export default {
    data() {
      return {
        loading: false,
        videoStages: [
          new VideoStage('', 0, {
            rightAnswer: '',
            failAnswers: ['', '', ''],
          }),
          new VideoStage('', 0, {
            rightAnswer: '',
            failAnswers: ['', '', ''],
          }),
          new VideoStage('', 0, {
            rightAnswer: '',
            failAnswers: ['', '', ''],
          }),
          new VideoStage('', 0, {
            rightAnswer: '',
            failAnswers: ['', '', ''],
          }),
          new VideoStage('', 0, {
            rightAnswer: '',
            failAnswers: ['', '', ''],
          }),
        ],
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
