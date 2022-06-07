<template>
  <div class="text-md-center text-sm-center">
    <h1 @click="$router.push({ name: 'shop' })">Shop</h1>
    <v-btn @click="$router.push({ name: 'outer' })">outer</v-btn>
    <v-btn @click="$router.push({ name: 'top' })">top</v-btn>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Shop",
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
