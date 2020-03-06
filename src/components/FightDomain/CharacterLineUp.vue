<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ title }}
        </h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col v-for="character in characters" :key="character.id">
        <slot :character="character" :selectCharacter="selectCharacter"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CharacterLineUp",

  props: {
    title: {
      type: String,
      default: "Select your ????"
    },
    selectCharacter: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      characters: [
        {
          id: 0,
          name: "Darth Maul",
          health: 10,
          attack: 5,
          src: "darth_maul.jpg"
        },
        {
          id: 1,
          name: "yoda",
          health: 10,
          attack: 5,
          src: "yoda.jpg"
        }
      ],
      selectedCharacter: undefined
    };
  }
};
</script>
