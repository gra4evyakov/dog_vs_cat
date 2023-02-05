<template>
  <v-row v-if="this.$store.getters.getfavList.length > 0">
    <v-col v-for="n in this.$store.getters.getfavList" :key="n" class="d-flex child-flex" cols="4">
      <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-img  :src="n" :lazy-src="n" aspect-ratio="1" cover class="bg-grey-lighten-2" v-bind="props">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      </template>
      <v-list class="py-0">
        <v-list-item @click="deleteItem(n)">
          <v-list-item-title class="text-center">Detele</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
  </v-row>
  <v-row class="d-flex h-100 align-center" v-else>
    <v-card class="mx-auto text-center py-4" width="400">
      <template v-slot:title>
        You don't like any dog
      </template>
      <v-card-text>
        Add to the list of favorite dogs!
      </v-card-text>
      <v-img class="mx-auto" height="300" lazy-src="../assets/sad_dog.jpg" max-width="500"
        src="../assets/sad_dog.jpg">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
    </v-card>
  </v-row>
  <my-nav></my-nav>
</template>

<script>
import MyNav from '@/components/MyNav.vue';
export default {
  data() {
    return {
      user: null,
      items: [
        { title: 'Delete' },
      ],
    }
  },
  components: {
    MyNav
  },
  methods: {
    deleteItem(data) {
      this.$store.commit('DELETE_FAVORITES_DATA', data)
    },
  },
  mounted() {
    this.$store.commit('SET_FAVORITES_DATA')
  },
  watch: {
    overlay(val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },
}
</script>