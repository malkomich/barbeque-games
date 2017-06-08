<template>
  <div class="card">

    <div class="header">
      <h4 class="title">Players</h4>
      <v-text-field v-for="player in players"
          label="Player Name"
          prepend-icon="face"
          :value="player.name"
          :key="player.id"
          single-line>
      </v-text-field>
      <v-btn dark flat v-on:click.native="addPlayer">
        <v-icon>add</v-icon>
        Add Player
      </v-btn>
    </div>

    <div class="content">
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-btn floating large class="purple"
              :loading="loading"
              :disabled="loading"
               v-on:click.native="playRound">
            <v-icon light>play_arrow</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

    </div>

  </div>
</template>

<script>
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification';

  export default {
    data() {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false,
        },
        players: [
          { id: 0, name: '' },
          { id: 1, name: '' },
        ],
        loading: false,
      };
    },
    components: {
      PaperNotification,
    },
    methods: {
      notifyVue(verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1);
        this.$notifications.notify(
          {
            message: 'Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.',
            icon: 'ti-gift',
            horizontalAlign,
            verticalAlign,
            type: this.type[color],
          });
      },
      addPlayer() {
        this.players.push({
          id: this.players[this.players.length - 1].id + 1,
          name: '',
        });
      },
      playRound() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 2000);
      },
    },
  };
</script>

<style>

</style>
