<template>
  <v-card class="grey lighten-4">
    <v-card-text>

      <div class="content">
        <v-layout row wrap>
          <v-flex xs4 sm3 lg2 xl1 v-for="card in gameCards" :key="card.key">
            <game-card :symbol="card.symbol" :rank="card.rank" :flippable="card.flippable" :unrevealed="!card.revealed"
              v-on:click="playRound(card)"></game-card>
          </v-flex>
        </v-layout>
      </div>

    </v-card-text>

    <v-snackbar top warning multi-line v-model="snackbar.visible" :timeout="snackbar.timeout">
        <b class="blue--text blue--accent-1">{{ snackbar.text }}</b>
      <v-btn icon @click.native="snackbar.toggle()">
        <v-icon large class="pink--text text--darken-1">close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar bottom warning multi-line v-model="snackbar.visible" :timeout="snackbar.timeout">
        <b class="blue--text blue--accent-1">{{ snackbar.text }}</b>
      <v-btn icon @click.native="snackbar.toggle()">
        <v-icon large class="pink--text text--darken-1">close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification';
  import GameCard from 'src/domain/game-card';

  // Polymer game-card component
  import 'game-card/game-card.html';

  export default {
    beforeMount() {
      let rankIndex = 3;
      while (rankIndex < GameCard.RANKS.length) {
        this.gameCards.push(new GameCard(GameCard.CLUBS, GameCard.RANKS[rankIndex], false));
        this.gameCards.push(new GameCard(GameCard.DIAMONDS, GameCard.RANKS[rankIndex], false));
        this.gameCards.push(new GameCard(GameCard.HEARTS, GameCard.RANKS[rankIndex], false));
        this.gameCards.push(new GameCard(GameCard.SPADES, GameCard.RANKS[rankIndex], false));
        rankIndex += 1;
      }
      this.gameCards.sort(() => 0.5 - Math.random());
    },
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
        gameCards: [],
        snackbar: {
          visible: false,
          timeout: 300000, // 5min
          toggle: function toggle() {
            this.visible = !this.visible;
          },
          text: '',
          show: function show(text) {
            this.text = text;
            this.visible = true;
          },
        },
        rules: {
          '5': '5 – todas las chicas beben',
          '6': '6 – todos los chicos beben',
          '7': '7 – Ojos de serpiente: Hasta que termine la ronda, todas las personas que te miren a los ojos, beben',
          '8': '8 – Elige a un amigo entre los participantes. Cada vez que tu amigo bebe, tú también bebes.',
          '9': '9 – Bebes.',
          '10': '10 – Mandas beber.',
          'j': 'J – El jugador a tu izquierda bebe.',
          'q': 'Q – El jugador a tu derecha bebe.',
          'k': 'K – Pon un poco de tu bebida en el vaso central. El que descubra el 4º Rey bebe todo el contenido del' +
              ' vaso.',
          'a': 'A – Puedes criar tu propria tarea o regla.',
        },
      };
    },
    components: {
      PaperNotification,
    },
    methods: {
      notifyVue(message) {
        this.$notifications.notify(
          {
            message,
            icon: 'ti-eye',
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            type: 'danger',
          });
      },
      addPlayer() {
        this.players.push({
          id: this.players[this.players.length - 1].id + 1,
          name: '',
        });
      },
      playRound(gameCard) {
        gameCard.toggleFlippable(false);
        this.snackbar.show(this.rules[gameCard.rank]);
      },
    },
  };
</script>

<style>

</style>
