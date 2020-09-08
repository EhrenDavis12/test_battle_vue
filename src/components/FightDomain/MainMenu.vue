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
    <ShopMenu v-if="this.screen === 'Shop'"></ShopMenu>
  </div>
</template>

<script>
import FightSetup from "./FightSetup";
import FightScreen from "./FightScreen";
import ShopMenu from "./Shop/ShopMenu";
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
    FightScreen,
    ShopMenu
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
