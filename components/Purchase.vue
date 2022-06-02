<template>
  <div class="flex flex-wrap mb-8">
    <div>
      <div>Покупка</div>
      <input
        class="py-0 px-4 border border-solid border-gray-300 mr-8 w-48 h-11"
        type="text"
        onfocus="this.value=''"
        v-model="product"
        @input="setProductName()"
      />
    </div>
    <div>
      <div class="md:mt-0 mt-4">Цена, $</div>
      <input
        class="py-0 px-4 border border-solid border-gray-300 w-48 h-11"
        type="number"
        onfocus="this.value=''"
        v-model="price"
        @input="setPrice()"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.$store.getters.getProductName,
      price: this.$store.getters.getPrice,
    };
  },

  methods: {
    setProductName() {
      this.$store.commit("setProductName", this.product);
    },
    setPrice() {
      this.$store.commit("setPrice", this.price);
      this.$store.commit("setResult");
    },
  },
};
</script>
