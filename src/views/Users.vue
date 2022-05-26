<template>
  <div>
    <h1>users</h1>
    <p>유저번호 : {{ userId }}</p>

  </div>
</template>

<script>
export default {
  name: "Users",
  computed: {
    userId () {
      return this.$route.params.userId
    }
  },
  created() {
    // router 에 있는 모든 router 들
    console.log('router', this.$router)

    // 해당하는 route만
    console.log('route', this.$route)
  }
}
</script>

<style scoped>

</style>
