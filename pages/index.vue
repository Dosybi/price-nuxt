<template>
  <main class="p-4 max-w-xl mx-auto">
    <Heading />
    <Purchase />
    <Duration />
    <Frequency />
    <Sale />
    <Result />
  </main>
</template>

<script>
import Purchase from "../components/Purchase.vue";
import Heading from "../components/Heading.vue";
import Duration from "../components/Duration.vue";
import Frequency from "../components/Frequency.vue";
import Sale from "../components/Sale.vue";
import Result from "../components/Result.vue";
export default {
  name: "IndexPage",
  components: { Purchase, Heading, Duration, Frequency, Sale, Result },
};
</script>

<style>
body {
  font-family: Raleway, sans-serif;
}
</style>
