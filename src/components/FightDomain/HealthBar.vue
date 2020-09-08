<template>
  <v-progress-linear
    class="mt-3"
    :value="healthPercent"
    :color="barColor"
    :buffer-value="100"
    :height="30"
    >{{ currentHealth }} / {{ maxhealth }}</v-progress-linear
  >
</template>

<script>
export default {
  name: "HealthBar",
  props: {
    currentHealth: {
      type: Number,
      default: 0
    },
    maxhealth: {
      type: Number,
      default: 0
    }
  },
  computed: {
    healthPercent: function() {
      return (this.currentHealth * 100) / this.maxhealth;
    },
    barColor: function() {
      return this.healthPercent > 30 ? "success" : "error";
    }
  }
};
</script>
