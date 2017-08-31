<template>
  <div class="card">

    <player-spawn :players="players"></player-spawn>

    <div class="content">
      <v-container fluid>
        <v-layout row justify-space-between>
          <v-btn floating large class="purple"
              :loading="loading"
              :disabled="loading"
               v-on:click.native="playRound">
            <v-icon light class="light-icon">play_arrow</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

    </div>

  </div>
</template>

<script>
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification';
  import PlayerSpawn from 'src/components/UIComponents/PlayerSpawn';

  export default {
    data() {
      return {
        actions: [
          'Bebe 1 trago',
          'Bebe 2 tragos',
          'Programa la B2B',
          'Manda beber 1 trago',
          'Manda beber 2 tragos',
          'No puede decir tacos en los próximos 10 turnos, sino bebe 2 cada vez',
          'Se quita una prenda o bebe 2',
          'Cuenta un chiste, si nadie ríe bebe 2',
          'Pone una norma para los próximos 10 turnos, quien incumpla bebe 1',
          'Baila la macarena o no bebe en 5 turnos',
          'Elige a una víctima que beberá los tragos que te toquen en los 5 turnos siguientes',
          'Elige a una víctima, el primero de los 2 que termine su vaso/cerveza, gana un aplauso',
        ],
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
      PlayerSpawn,
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
      playRound() {
        if (!this.players[0].name || !this.players[1].name) {
          this.notifyVue('Añade al menos 2 jugadores');
          return;
        }
        this.loading = true;
        const playerIndex = Math.floor((Math.random() * this.players.length));
        const actionIndex = Math.floor((Math.random() * this.actions.length));
        const message = `${this.players[playerIndex].name} ${this.actions[actionIndex]}`;

        setTimeout(() => {
          this.notifyVue(message);
          this.loading = false;
        }, 1000);
      },
    },
  };
</script>

<style>

</style>
