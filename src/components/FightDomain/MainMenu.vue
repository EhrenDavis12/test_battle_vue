<template>
  <div>
    <FightSetup v-if="this.screen === 'FightSetup'" @selected="setCharacters">
    </FightSetup>
    <FightScreen
      v-if="this.screen === 'FightScreen'"
      :player="player"
      :enemy="enemy"
      @won="playerWonFight"
      @lsot="playerLostFight"
    >
    </FightScreen>
    <div v-if="this.screen === 'Shop'">Shop</div>
  </div>
</template>

<script>
import FightSetup from "./FightSetup";
import FightScreen from "./FightScreen";
export default {
  name: "MainMenue",

  data() {
    return {
      player: undefined,
      enemy: undefined,
      screen: "FightSetup"
    };
  },
  components: {
    FightSetup,
    FightScreen
  },
  methods: {
    setCharacters(character) {
      this.player = character.player;
      this.enemy = character.enemy;
      this.screen = "FightScreen";
    },
    playerWonFight() {
      this.screen = "Shop";
    },
    playerLostFight() {
      this.player = null;
      this.enemy = null;
      this.screen = "FightSetup";
    }
  }
};
</script>
