<template>
  <v-container>
    <CharacterLineUp
      v-if="this.player === undefined"
      title="Select your character"
      :selectCharacter="selectPlayer"
    >
    </CharacterLineUp>
    <CharacterLineUp
      v-if="this.enemy === undefined"
      title="Select your enemy"
      :selectCharacter="selectEnemy"
    >
    </CharacterLineUp>
    <FightScreen
      v-if="this.player !== undefined && this.enemy !== undefined"
      :player="player"
      :enemy="enemy"
    >
    </FightScreen>
  </v-container>
</template>

<script>
import CharacterLineUp from "./CharacterLineUp";
import FightScreen from "./FightScreen";
export default {
  name: "FightSetup",

  data() {
    return {
      player: undefined,
      enemy: undefined
    };
  },
  components: {
    CharacterLineUp,
    FightScreen
  },
  methods: {
    selectPlayer(character) {
      this.player = character;
      this.player.maxhealth = this.player.health;
      console.log(`your player is ${this.player.name}`);
    },
    selectEnemy(character) {
      this.enemy = character;
      this.enemy.maxhealth = this.enemy.health;
      console.log(`your enemy will be ${this.enemy.name}`);
    }
  }
};
</script>
