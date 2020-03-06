<template>
  <v-container>
    <CharacterLineUp
      v-if="this.player === undefined"
      title="Select your character"
    >
      <template slot-scope="{ character }">
        <CharacterCard :character="character" :selectCharacter="selectPlayer" />
      </template>
    </CharacterLineUp>
    <CharacterLineUp v-if="this.enemy === undefined" title="Select your enemy">
      <template slot-scope="{ character }">
        <CharacterCard :character="character" :selectCharacter="selectEnemy" />
      </template>
    </CharacterLineUp>
  </v-container>
</template>

<script>
import CharacterLineUp from "./CharacterLineUp";
import CharacterCard from "./CharacterCard";
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
    CharacterCard
  },
  methods: {
    selectPlayer(character) {
      // eslint-disable-next-line no-debugger
      //   debugger;
      this.player = character;
      console.log(`your player is ${this.player.name}`);
    },
    selectEnemy(character) {
      // eslint-disable-next-line no-debugger
      //   debugger;
      this.enemy = character;
      console.log(`your enemy will be ${this.enemy.name}`);
    }
  }
};
</script>
