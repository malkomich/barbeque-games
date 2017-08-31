<template>
  <div class="content">

    <h4 class="title">Players</h4>

    <v-container fluid>
      <v-layout row wrap>

        <v-flex xs12 md4 v-for="player in players" :key="player.id">
          <v-text-field
            label="Player Name"
            prepend-icon="face"
            v-model="player.name"
            single-line>
          </v-text-field>
        </v-flex>

        <v-flex xs12 md4 elevation-5>
          <v-btn dark flat v-on:click.native="addPlayer">
            <v-icon>add</v-icon>
            Add Player
          </v-btn>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
  export default {
    props: {
      players: {
        type: Array,
      },
    },
    methods: {
      addPlayer() {
        this.players.push({
          id: this.players[this.players.length - 1].id + 1,
          name: '',
        });
      },
    },
  };
</script>

<style>
</style>
