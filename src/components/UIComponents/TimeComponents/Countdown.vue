<template>
  <div class="block">
    <p class="digit">{{ time }}</p>
  </div>
</template>

<script>
  export default {

    props: {
      seconds: {
        type: Number,
      },
      running: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        time: this.seconds,
      };
    },
    watch: {
      time(val, oldVal) {
        if (val < 0) {
          this.$emit('end');
        }
      },
    },
    mounted() {
      setInterval(this.decreaseSeconds, 1000);
    },
    methods: {
      decreaseSeconds() {
        if (this.running) {
          this.time -= 1;
        }
      },
    },
  };
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .digit {
    color: #1abc9c;
    font-size: 150px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>
