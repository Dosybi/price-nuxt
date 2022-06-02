<template>
  <div class="mb-8">
    <div class="flex items-center">
      <input type="checkbox" class="mr-2 box" @change="isHidden = !isHidden" />
      <div>Потом продам</div>
      <div class="inline-flex items-center" :class="{ hidden: isHidden }">
        <div> за </div>
        <div>
          <input
            class="w-8 text-center bg-blue-200 p-0"
            type="text"
            onfocus="this.value=''"
            v-model="percent"
            @input="setSalePercentage()"
          />
        </div>
        <div> % от цены </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
      percent: 20,
    };
  },
  methods: {
    setSalePercentage() {
      if (this.isHidden === false) {
        this.$store.commit("setSalePrice", this.percent);
      }
      this.$store.commit("setResult");
    },
  },
};
</script>

<style scoped>
.box {
  zoom: 1.3;
}
</style>
