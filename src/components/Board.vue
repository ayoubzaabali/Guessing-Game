<template>
  <button @click="startgame()">Start</button>
  <div class="container" v-show="this.$store.state.start">
    <Kard
      v-for="item in this.$store.state.users"
      :key="item.key"
      :image="item.name"
      :display="item.display"
      :id="item.id"
      :disabled="item.disabled"
      :Ckey="item.key"
    />
  </div>
</template>

<script>
import Kard from "@/components/Kard.vue";
import { mapMutations  } from "vuex";

export default {
  name: "Board",
  methods: {
    ...mapMutations(["start"]),
    startgame: function () {
      document.querySelector("button").innerText = "Restart";
      this.start();
    },
  },
  computed: {
    dataset: function () {
      return this.$store.state.users;
    },
  },
  components: {
    Kard,
  },
};
</script>

<style>
.container {
  width: 90%;
  height: 100vh;
  padding: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
button {
  background-image: linear-gradient(to right, black, #73243e);
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  min-width: 100px;
}
button:hover {
  background-image: linear-gradient(to left, black, #73243e);
}
</style>
