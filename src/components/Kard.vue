<template>
  <div class="item" @click="checker(Ckey)" v-bind:class="{ disabled,noClick:display }">
    <img :src="`shapes/${image}`" v-show="display"  />
    <div style="display:none" ></div>
    <div>{{ id }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Kard",
  props: {
    id: Number,
    image: String,
    display: Number,
    disabled: Number,
    Ckey: Number,
  },
  methods: {
    ...mapActions(["setDisplayAct", "checkAct"]),
    async checker(Ckey) {
      await this.setDisplayAct(Ckey);
      if (this.$store.state.clicked.length == 2) {
        this.checkAct();
      }
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
.item {
  background: #73243e;
  display: flex;
  justify-content: center;
  align-self: center;
  height: 200px;
  cursor: pointer;
  transform: skewY(-15deg);
  background-image: linear-gradient(to right, black, #73243e);
}
.item:hover {
  animation: twirl 3s;
  transform-style: preserve-3d;
  animation-fill-mode: forwards;
  animation-direction: reverse;
  perspective: 500px;
}
.noClick {
   pointer-events: none;
}
@keyframes twirl {
  from {
    transform: skewY(-15deg);
  }
  to {
    transform: skewY(15deg);
    background-image: linear-gradient(to right,  #73243e, black);

  }
}
.disabled {
  opacity: 0.7;
}
</style>
