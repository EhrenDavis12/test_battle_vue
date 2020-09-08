<template>
  <v-container>
    <CharacterLineUp
      v-if="!this.player"
      title="Select your character"
      @selectedCharacter="selectPlayer"
    >
    </CharacterLineUp>
    <CharacterLineUp
      v-if="this.player"
      title="Select your enemy"
      @selectedCharacter="selectEnemy"
    >
    </CharacterLineUp>
  </v-container>
</template>

<script>
import CharacterLineUp from "./CharacterLineUp";
export default {
  name: "FightSetup",

  data() {
    return {
      player: undefined,
      enemy: undefined
    };
  },
  components: {
    CharacterLineUp
  },
  methods: {
    selectPlayer(character) {
      this.player = character;
      this.player.maxhealth = this.player.health;
    },
    selectEnemy(character) {
      this.enemy = character;
      this.enemy.maxhealth = this.enemy.health;
      this.$emit("selected", {
        player: this.player,
        enemy: this.enemy
      });
    }
  }
};
</script>
