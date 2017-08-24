<template>
  <v-card class="grey lighten-4">

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
        <paper-checkbox :checked="option.text === selectedOptionText" :change="onOptionChanged(option)">
          {{ option.text }}
        </paper-checkbox>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn flat class="teal--text" @click="submitAnswer()">Dale!</v-btn>
      <v-btn flat class="grey--text" @click="skip()">No me la juego...</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  import VideoStage from 'src/domain/video-stage';
  
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
            { text: 'Aparece un hombre gritando con un aire acondicionado', right: true },
            { text: 'La mujer es arrollada por un dinosaurio hasta la piscina', right: false },
            { text: 'Al quitarse la camisa, aparece un pecho lleno de pelo', right: false },
            { text: 'En realidad es un anuncio de wonderbra', right: false },
          ]),
          new VideoStage('96paLghfXY8', 0, [
            { text: 'Le arroya un grupo de ciclistas', right: true },
            { text: 'Cae uno de los árboles de alrededor encima de él mientras baila', right: false },
            { text: 'Al hacer un paso de baile cae contra el suelo, perdiendo varios dientes',
              right: false },
            { text: 'La cámara aleja el zoom y se descubre que es una coreografía grupal a gran escala',
              right: false },
          ]),
          new VideoStage('kwtWTpLYvOo', 0, [
            { text: 'Empieza a violar al globo hasta que explota', right: false },
            { text: 'Empiezan a aparecen muchos globos iguales y el conejo sale huyendo',
              right: false },
            { text: 'El globo explota, aturdiendo al conejo, y acto después se traga el globo explotado',
              right: false },
            { text: 'Aparece repentinamente un pájaro, llevándose al conejo en el aire', right: false },
          ]),
          new VideoStage('LcNmFFy0Ng4', 0, [
            { text: 'Tira el monopatín y se desliza calle abajo sólo con sus playeras', right: true },
            { text: 'Hay un trozo de suelo falso y se cae dentro', right: false },
            { text: 'Aparece un hombre disfrazado de pollo y le hace un placaje', right: false },
            { text: 'Al intentar subirse, cae con la cabeza en la tabla y la parte', right: false },
          ]),
          new VideoStage('h_hcjTdiNvk', 0, [
            { text: 'Hay una bella mujer haciendo una felación al hombre enano', right: true },
            { text: 'Al arrancar, el motor del coche del hombre enano tiene mayor potencia y le adelanta',
              right: false },
            { text: 'Aparece de repente un coro de ópera alrededor del coche deportivo', right: false },
            { text: 'El hombre enano enseña su placa de policía, y detiene al conductor del deportivo',
              right: false },
          ]),
          new VideoStage('mxIlyP-Sxw4', 0, [
            { text: 'Saca un arma y empieza a disparar al interior del buzón', right: true },
            { text: 'El buzón se despega del suelo y sale huyendo', right: false },
            { text: 'Empiezan a salir un chorro potente de agua del buzón', right: false },
            { text: 'El hombre tira una cerilla encendida al interior del buzón', right: false },
          ]),
        ],
        selectedOption: null,
      };
    },
    computed: {
      currentVideoStage: {
        get() {
          return this.videoStages.pop();
        },
      },
      selectedOptionText: {
        get() {
          return this.selectedOption ? this.selectedOption.text : '';
        },
      },
    },
    beforeMount() {
      this.shuffleVideoStages();
    },
    methods: {
      submitAnswer() {
        if (!this.selectedOption) {
          return;
        }
        const resultMessage = this.selectedOption.right ? 'CORRECTO!!' : 'HAS FALLADO';
        console.log(resultMessage, this.selectedOption.text);
        // TODO: Highlight right answer and continue playing video
      },
      skip() {
        // TODO: Remove current video from array
      },
      onOptionChanged(option) {
        this.selectedOption = option;
      },
      shuffleVideoStages() {
        this.videoStages.sort(() => 0.5 - Math.random());
      },
      onVideoTimeChanged(event) {
        console.log('Current time changed', event);
      },
    },
  };
</script>

<style>
  paper-checkbox {
    --paper-checkbox-size: 2em;
    --paper-checkbox-checked-color: var(--paper-red-500);
    --paper-checkbox-checked-ink-color: var(--paper-red-500);
    --paper-checkbox-unchecked-color: var(--paper-red-900);
    --paper-checkbox-unchecked-ink-color: var(--paper-red-900);
    --paper-checkbox-label-color: var(--paper-red-500);
    --paper-checkbox-vertical-align: top;
  }
</style>
