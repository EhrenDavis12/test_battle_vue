<template>
  <div>
    <v-btn class="mr-3" @click="action('push')">push</v-btn>
    <v-btn class="mr-3" @click="action('strike')">strike</v-btn>
    <v-btn @click="action('jump')">jump</v-btn>
  </div>
</template>

<script>
export default {
  name: "ActionBar",
  props: {
    action: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
