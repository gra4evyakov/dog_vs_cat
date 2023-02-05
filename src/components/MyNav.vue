<template>
  <v-bottom-navigation :value="value" color="pink" height="60" grow>
    <v-btn to="/">
      <v-icon>mdi-dog</v-icon>
      <span>Search</span>
    </v-btn>
    <v-btn to="/favorites">
      <v-icon>mdi-heart</v-icon>
      <span>Favorites</span>
    </v-btn>
    <v-btn to="/auth" @click="logOut">
      <v-icon>mdi-logout</v-icon>
      <span>Logout</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 1}),
  methods: {
    logOut() {
      localStorage.removeItem('accessToken')
    },
  },
}
</script>