<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Ready Set Fight
        </h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <h3>Player</h3>
        <CharacterCard
          :character="player"
          :disableHover="true"
          :cardColor="playerBoarderColor"
        />
        <HealthBar
          :currentHealth="player.health"
          :maxhealth="player.maxhealth"
        />
      </v-col>
      <v-col>
        <h3>Enemy</h3>
        <CharacterCard
          :character="enemy"
          :disableHover="true"
          :cardColor="enemyBoarderColor"
        />
        <HealthBar :currentHealth="enemy.health" :maxhealth="enemy.maxhealth" />
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <ActionBar :action="selectedAttack"></ActionBar>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CharacterCard from "./CharacterCard";
import HealthBar from "./HealthBar";
import ActionBar from "./ActionBar";
import { getComputerInput, playOutTheBattle } from "./Battle";
export default {
  name: "FightScreen",

  props: {
    player: {
      type: Object,
      default: () => {}
    },
    enemy: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    CharacterCard,
    HealthBar,
    ActionBar
  },
  data() {
    return {
      playerBoarderColor: "black",
      enemyBoarderColor: "black",
      playerChoice: "",
      enemyChoice: ""
    };
  },
  methods: {
    selectedAttack(playerChoice) {
      this.playerChoice = playerChoice;
      this.enemyChoice = getComputerInput();

      this.winner = playOutTheBattle(this.playerChoice, this.enemyChoice);
      console.log(`winner: ${this.winner}`);
      this.resolveBattle();
    },
    resolveBattle() {
      if (this.enemy.health < 1) return;
      if (this.player.health < 1) return;

      if (this.winner === "player") {
        this.enemy.health -= this.player.attack;
        this.playerBoarderColor = "green";
        this.enemyBoarderColor = "black";
      } else if (this.winner === "enemy") {
        this.player.health -= this.enemy.attack;
        this.playerBoarderColor = "black";
        this.enemyBoarderColor = "green";
      } else {
        this.playerBoarderColor = "black";
        this.enemyBoarderColor = "black";
      }

      if (this.enemy.health < 1) this.enemy.health = 0;
      if (this.player.health < 1) this.player.health = 0;
    }
  }
};
</script>
