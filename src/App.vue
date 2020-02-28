<template>
  <v-app>
    <NavBar />

    <!-- v-sheet id... is needed from NavBar -->
    <v-sheet
      id="scrolling-on-page-navbar"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-content>
        <!-- <HelloWorld /> -->
        <router-view />
      </v-content>
    </v-sheet>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
