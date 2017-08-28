<template>
  <div>
    <v-card class="grey lighten-4" v-if="currentVideoStage">

      <v-card-media>
        <div class="content">
          <google-youtube chromeless
            :video-id="currentVideoStage.videoId"
            autoplay="1"
            height="270px"
            width="480px"
            rel="0"
            start="5">
          </google-youtube>
        </div>
      </v-card-media>

      <v-card-text>
        <div v-for="option in currentVideoStage.options" :key="option.text">
          <paper-checkbox :checked="option.checked" @change="onOptionChanged(option)" :disabled="roundFinished"
              :class="{ 'highlight-error': !option.right && roundFinished && option.checked,
                        'highlight-success': option.right && roundFinished }">
            {{ option.text }}
          </paper-checkbox>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn flat class="teal--text" @click.native="submitAnswer()">Dale!</v-btn>
        <v-btn flat class="grey--text" @click.native="skip()">No me la juego...</v-btn>
      </v-card-actions>

    </v-card>

    <v-card class="grey lighten-4" v-if="!currentVideoStage">
      <v-card-text>
        There are no videos left. Sorry!
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import VideoStage from 'src/domain/video-stage';
  import Option from 'src/domain/option';
  
  // Polymer youtube player component
  import 'google-youtube/google-youtube.html';
  // Polymer checkbox component
  import 'paper-checkbox/paper-checkbox.html';

  export default {
    data() {
      return {
        loading: false,
        videoStages: [
          new VideoStage('GXvSn0YxjR8', 0, [
            new Option('Aparece un hombre gritando con un aire acondicionado', true),
            new Option('La mujer es arrollada por un dinosaurio hasta la piscina'),
            new Option('Al quitarse la camisa, aparece un pecho lleno de pelo'),
            new Option('En realidad es un anuncio de wonderbra'),
          ]),
          new VideoStage('96paLghfXY8', 0, [
            new Option('Le arroya un grupo de ciclistas', true),
            new Option('Cae uno de los árboles de alrededor encima de él mientras baila'),
            new Option('Al hacer un paso de baile cae contra el suelo, perdiendo varios dientes'),
            new Option('La cámara aleja el zoom y se descubre que es una coreografía grupal a gran escala'),
          ]),
          new VideoStage('kwtWTpLYvOo', 0, [
            new Option('Empieza a violar al globo hasta que explota', true),
            new Option('Empiezan a aparecen muchos globos iguales y el conejo sale huyendo'),
            new Option('El globo explota, aturdiendo al conejo, y acto después se traga el globo explotado'),
            new Option('Aparece repentinamente un pájaro, llevándose al conejo en el aire'),
          ]),
          new VideoStage('LcNmFFy0Ng4', 0, [
            new Option('Tira el monopatín y se desliza calle abajo sólo con sus playeras', true),
            new Option('Hay un trozo de suelo falso y se cae dentro'),
            new Option('Aparece un hombre disfrazado de pollo y le hace un placaje'),
            new Option('Al intentar subirse, cae con la cabeza en la tabla y la parte'),
          ]),
          new VideoStage('h_hcjTdiNvk', 0, [
            new Option('Hay una bella mujer haciendo una felación al hombre enano', true),
            new Option('Al arrancar, el motor del coche del hombre enano tiene mayor potencia y le adelanta'),
            new Option('Aparece de repente un coro de ópera alrededor del coche deportivo'),
            new Option('El hombre enano enseña su placa de policía, y detiene al conductor del deportivo'),
          ]),
          new VideoStage('mxIlyP-Sxw4', 0, [
            new Option('Saca un arma y empieza a disparar al interior del buzón', true),
            new Option('El buzón se despega del suelo y sale huyendo'),
            new Option('Empiezan a salir un chorro potente de agua del buzón'),
            new Option('El hombre tira una cerilla encendida al interior del buzón'),
          ]),
        ],
        roundFinished: false,
        selectedOption: null,
      };
    },
    computed: {
      currentVideoStage: {
        get() {
          return this.videoStages.length ? this.videoStages[0] : undefined;
        },
      },
    },
    beforeMount() {
      this.shuffleVideoStages();
    },
    methods: {
      submitAnswer() {
        if (this.roundFinished) {
          return;
        }
        if (!this.selectedOption) {
          this.notifyVue('You must select any option!', 'warning');
          return;
        }
        if (this.selectedOption.right) {
          this.notifyVue('CORRECTO!', 'success');
        } else {
          this.notifyVue('HAS FALLADO!', 'danger');
        }
        this.roundFinished = true;
        setTimeout(() => {
          this.next();
        }, 3000);
      },
      next() {
        this.videoStages.shift();
        this.roundFinished = false;
        this.selectedOption = null;
      },
      onOptionChanged(selectedOption) {
        selectedOption.check(true);
        this.selectedOption = selectedOption;
        this.currentVideoStage.options
          .filter(option => option.text !== selectedOption.text)
          .forEach(option => option.check(false));
      },
      shuffleVideoStages() {
        this.videoStages.sort(() => 0.5 - Math.random());
      },
      onVideoTimeChanged(event) {
        console.log('Current time changed', event);
      },
      notifyVue(message, type) {
        this.$notifications.notify({
          message,
          icon: 'ti-gift',
          horizontalAlign: 'bottom',
          verticalAlign: 'center',
          type,
        });
      },
    },
  };
</script>

<style>
  paper-checkbox {
    --paper-checkbox-size: 2em;
    --paper-checkbox-checked-color: var(--paper-purple-A400);
    --paper-checkbox-checked-ink-color: var(--paper-purple-200);
    --paper-checkbox-unchecked-color: var(--paper-teal-300);
    --paper-checkbox-unchecked-ink-color: var(--paper-purple-100);
    --paper-checkbox-label-color: var(--paper-indigo-800);
    --paper-checkbox-vertical-align: top;
  }
  paper-checkbox.highlight-error {
    background-color: #F8E0E0;
  }
  paper-checkbox.highlight-success {
    background-color: #CEF6CE;
  }
</style>
