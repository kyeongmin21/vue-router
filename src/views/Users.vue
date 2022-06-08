<template>
  <div>
    <v-layout row wrap pt-5 text-xs-center
              style="max-width: 500px; margin: 0 auto;">
      <v-flex xs12>
        <h1>users</h1>
        <p>유저를 검색해주세요.</p>
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="userId"
                      label="유저 번호를 입력해 주세요."></v-text-field>
        <v-btn @click="$router.push({ name: 'users-detail', params: { id: userId } })">검색</v-btn>
      </v-flex>
      <v-flex xs12>
        <router-view></router-view>
      </v-flex>
    </v-layout>

    <!--    <p>유저번호 : {{ userId }}</p>
        <p>이름 : {{ $route.params.name }}</p>
        <p>그룹 : {{ $route.query.group }}</p>
        <p>카테고리 : {{ $route.query.category }}</p>-->
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      userId: null
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('before enter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('before leave')
  }
/*  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  created() {
    // router 에 있는 모든 router 들
    console.log('router', this.$router)

    // 해당하는 route만
    console.log('route', this.$route)
  }*/
}
</script>
