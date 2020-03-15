<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Ready Set Fight
        </h1>
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <h3>Player</h3>
      <h3>Enemy</h3>
    </v-row>

    <v-row align="start" justify="space-between">
      <v-col cols="auto">
        <CharacterCard :character="player" :disableHover="true" />
        <ActionCard :srcImage="playerChoice" :cardColor="playerBoarderColor" />
      </v-col>
      <v-col cols="auto">
        <ActionCard :srcImage="enemyChoice" :cardColor="enemyBoarderColor" />
        <CharacterCard :character="enemy" :disableHover="true" />
      </v-col>
    </v-row>

    <v-row align="start" justify="space-between">
      <v-col>
        <HealthBar
          :currentHealth="player.health"
          :maxhealth="player.maxhealth"
        />
      </v-col>
      <v-col>
        <HealthBar :currentHealth="enemy.health" :maxhealth="enemy.maxhealth"
      /></v-col>
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
import ActionCard from "./ActionCard";
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
    ActionCard,
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
  watcher: {},
  methods: {
    selectedAttack(playerChoice) {
      if (this.enemy.health < 1) return;
      if (this.player.health < 1) return;
      let enemyChoice = getComputerInput();

      this.winner = playOutTheBattle(playerChoice, enemyChoice);

      this.playerChoice = `moves/${playerChoice}.jpg`;
      this.enemyChoice = `moves/${enemyChoice}.jpg`;

      console.log(`winner: ${this.winner}`);
      this.resolveBattle();
    },
    resolveBattle() {
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
