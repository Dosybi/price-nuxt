<template>
  <div>
    <div class="result mt-4 pt-6 px-4 pb-4 rounded-xl">
      <h1 class="text-4xl font-bold">{{ purchase }}:</h1>
      <h1 class="text-4xl font-bold">{{ result }} $ за раз</h1>
      <p class="mt-4 mb-2">
        Настоящая цена покупки, если воспользоваться ею {{ times }}
        {{ timesWord }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    purchase() {
      return this.$store.getters.getProductName;
    },
    result() {
      return this.$store.getters.getResult;
    },
    times() {
      return this.$store.getters.getTimes;
    },
    timesWord() {
      let last = this.$store.getters.getTimes.toString().slice(-1);
      let last2 = this.$store.getters.getTimes.toString().slice(-2);
      return last == 0 ||
        last == 1 ||
        last == 5 ||
        last == 6 ||
        last == 7 ||
        last == 8 ||
        last == 9 ||
        (last2 > 10 && last2 < 21)
        ? "раз"
        : "раза";
    },
  },
  mounted() {
    this.$store.commit("setResult");
  },
};
</script>

<style scoped>
.result {
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
</style>
