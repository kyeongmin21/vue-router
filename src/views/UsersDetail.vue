<template>
  <div>
    <h1>users-detail</h1>
    <p>유저 번호 : {{ userId }}</p>
    <v-btn @click="edit" small>수정</v-btn>
  </div>
</template>

<script>
export default {
  name: "UsersDetail",
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  methods: {
    edit () {
      this.$router.push({ name: 'users-edit' })
    }
  }
}
</script>

<style scoped>

</style>
