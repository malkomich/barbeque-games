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
      <v-layout row wrap>
        <v-flex xs4 sm3 v-for="card in gameCards" :key="card.key">
          <game-card :symbol="card.symbol" :rank="card.rank" :flippable="card.flippable" unrevealed
            v-on:click="playRound(card)"></game-card>
        </v-flex>
      </v-layout>
    </div>

  </div>
</template>

<script>
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification';
  import GameCard from 'src/domain/game-card';

  // Polymer game-card component
  import 'game-card/game-card.html';

  export default {
    mounted() {
      let cardNumber = 1;
      while (cardNumber <= 12) {
        this.gameCards.push(new GameCard(GameCard.CLUBS, cardNumber));
        this.gameCards.push(new GameCard(GameCard.DIAMONDS, cardNumber));
        this.gameCards.push(new GameCard(GameCard.HEARTS, cardNumber));
        this.gameCards.push(new GameCard(GameCard.SPADES, cardNumber));
        cardNumber += 1;
      }
      // shuffle(this.gameCards);
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
      playRound(gameCard) {
        gameCard.toggleFlippable(false);
      },
    },
  };
</script>

<style>

</style>
