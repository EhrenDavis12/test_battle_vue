<template>
  <v-card :raised="false" :color="cardColor" class="d-inline-block mx-2">
    <v-container>
      <v-img :height="100" :width="100" :src="imageSrc"></v-img>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ActionCard",
  props: {
    srcImage: {
      type: String,
      default: null
    },
    cardColor: {
      type: String,
      default: "black"
    }
  },
  computed: {
    imageSrc: function() {
      return this.srcImage ? require(`../../assets/${this.srcImage}`) : null;
    }
  }
};
</script>
