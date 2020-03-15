<template>
  <v-hover>
    <v-card
      :raised="raised"
      :color="cardColor"
      slot-scope="{ hover }"
      :class="`d-inline-block mx-auto elevation-${hover ? hoverClass : 2}`"
    >
      <v-container>
        <v-img
          :height="200"
          :width="200"
          :src="imageSrc"
          @click="imgClick(character)"
        ></v-img>
        <h5>{{ character.name }}</h5>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      default: () => {}
    },
    imgClick: {
      type: Function,
      default: () => {}
    },
    disableHover: {
      type: Boolean,
      default: false
    },
    cardColor: {
      type: String,
      default: "black"
    }
  },
  computed: {
    imageSrc: function() {
      return require(`../../assets/characters/${this.character.src}`);
    },
    hoverClass: function() {
      return this.disableHover ? 2 : 12;
    },
    raised: function() {
      return this.cardColor === "black" ? false : true;
    }
  }
};
</script>
