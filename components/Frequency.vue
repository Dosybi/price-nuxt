<template>
  <div class="mb-8 mt-4">
    <div class="flex justify-between">
      <div>Как часто</div>
      <div>{{ label }}</div>
    </div>
    <input
      type="range"
      class="appearance-none h-1 bg-green-500 outline-none opacity-70 w-full"
      min="1"
      max="9"
      v-model="frequency"
      @input="setFrequency()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "Каждый день",
      frequency: 9,
      frequencyDays: 30,
    };
  },
  methods: {
    setFrequency() {
      if (this.frequency == 1) {
        this.label = "Раз в месяц";
        this.frequencyDays = 1;
      } else if (this.frequency == 2) {
        this.label = "Два раза в месяц";
        this.frequencyDays = 2;
      } else if (this.frequency == 3) {
        this.label = "Раз в неделю";
        this.frequencyDays = 4.5;
      } else if (this.frequency == 4) {
        this.label = "Два раза в неделю";
        this.frequencyDays = 9;
      } else if (this.frequency == 5) {
        this.label = "Три раза в неделю";
        this.frequencyDays = 13.5;
      } else if (this.frequency == 6) {
        this.label = "Четыре раза в неделю";
        this.frequencyDays = 18;
      } else if (this.frequency == 7) {
        this.label = "Пять раз в неделю";
        this.frequencyDays = 22.5;
      } else if (this.frequency == 8) {
        this.label = "Шесть раз в неделю";
        this.frequencyDays = 27;
      } else if (this.frequency == 9) {
        this.label = "Каждый день";
        this.frequencyDays = 30;
      }
      this.$store.commit("setFrequency", this.frequencyDays);
      this.$store.commit("setResult");
    },
  },
};
</script>
