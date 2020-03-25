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
          @click="$emit('imgClick')"
        ></v-img>
        <h5>{{ name }}</h5>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    name: {
      type: String,
      default: "Undefined"
    },
    imageName: {
      type: String,
      default: "Undefined"
    },
    disableHover: {
      type: Boolean,
      default: false
    },
    cardColor: {
      type: String,
      default: "white"
    }
  },
  computed: {
    imageSrc: function() {
      return require(`../../assets/characters/${this.imageName}`);
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
