<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`d-inline-block mx-auto elevation-${hover ? 12 : 2}`"
    >
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-img
              height="200"
              width="200"
              :src="imageSrc"
              @click="selectCharacter(character)"
            ></v-img>

            <h5>{{ character.name }}</h5>
          </v-col>

          <!-- <div v-if="showIcons">
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column ma-0 fill-height" justify="center">
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
              </v-col>

              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </div> -->
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      default: () => {}
    },
    selectCharacter: {
      type: Function,
      default: () => {}
    }

    // showIcons: {
    //   type: Boolean,
    //   default: false
    // }
  },
  methods: {
    // selectCharacter() {
    //   // eslint-disable-next-line no-debugger
    //   debugger;
    //   this.$emit("selectCharacter", this.character);
    // }
  },
  computed: {
    imageSrc: function() {
      return require(`../../assets/characters/${this.character.src}`);
    }
  }
};
</script>
