<template>
  <div>
    <h1>users-edit</h1>
  </div>
</template>

<script>
export default {
  name: "UsersEdit",
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
