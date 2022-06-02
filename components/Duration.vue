<template>
  <div class="mb-8">
    <div class="mb-4">
      <div class="flex justify-between">
        <div>Буду пользоваться</div>
        <div>{{ label }}</div>
      </div>
      <input
        type="range"
        class="appearance-none h-1 bg-green-500 outline-none opacity-70 w-full"
        min="0"
        max="240"
        :step="step"
        v-model="duration"
        @input="setDuration($event)"
      />
    </div>
    <div class="flex flex-wrap gap-2" :class="{ hidden: isHidden }">
      <button
        v-for="button in buttons"
        :key="button"
        class="bg-green-200 border border-solid divide-green-500 rounded cursor-pointer py-2 px-4"
        :class="{ disabled: isDisabled }"
        @click="setSeasons($event)"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 1,
      isHidden: true,
      step: 1,
      label: "1 месяц",
      season: 1,
      buttons: ["Летом", "Осенью", "Зимой", "Весной"],
    };
  },
  methods: {
    setDuration() {
      this.$store.commit("setMonths", this.duration);
      this.duration >= 12 ? (this.isHidden = false) : (this.isHidden = true);
      this.duration >= 12 ? (this.step = 12) : (this.step = 1);
      if (this.duration == 1) {
        this.label = `${this.duration} месяц`;
      } else if (this.duration > 1 && this.duration < 5) {
        this.label = `${this.duration} месяца`;
      } else if (this.duration > 4 && this.duration < 12) {
        this.label = `${this.duration} месяцев`;
      } else if (this.duration == 12) {
        this.label = `${this.duration / 12} год`;
      } else if (this.duration >= 24 && this.duration < 49) {
        this.label = `${this.duration / 12} года`;
      } else if (this.duration > 49) {
        this.label = `${this.duration / 12} лет`;
      }
      this.$store.commit("setResult");
    },

    setSeasons(e) {
      e.target.classList.toggle("disabled");
      e.target.classList.contains("disabled")
        ? (this.season -= 0.25)
        : (this.season += 0.25);
      this.$store.commit("setSeason", this.season);
      this.$store.commit("setResult");
    },
  },
};
</script>

<style scoped>
.disabled {
  background: lightgray;
  border: 1px solid lightgray;
  text-decoration: line-through;
}
</style>
