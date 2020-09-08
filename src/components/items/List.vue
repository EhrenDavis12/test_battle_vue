<template>
  <div>
    <h1>Item list</h1>
    <div class="home">
      <span v-if="loading">Loading…</span>
      <ul v-else class="itemList">
        <li v-for="item in items" :key="item.name" class="itemList-item">
          <h1>{{ item.name }}</h1>
          <items-card />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: undefined,
      loading: false,
    };
  },

  //   components: {
  //   },

  //   computed: {
  //     items() {
  //       return [{ name: "Hammer" }, { name: "nail" }];
  //     },
  //   },

  created() {
    this.loading = true;
    this.api.items.fetchItems().then((items) => {
      this.loading = false;
      this.items = items;
    });
  },

  //   methods: {
  //     fetchData(character) {
  //       this.player = character.player;
  //       this.enemy = character.enemy;
  //       this.screen = "FightScreen";
  //     },
  //   },
};
</script>

<style scoped>
.itemList {
  list-style: none;
  text-align: left;
}

.itemList-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
