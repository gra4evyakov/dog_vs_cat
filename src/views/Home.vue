<template>
<div>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="1">Random</v-tab>
      <v-tab :value="2">By Breed</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 2" :key="n" :value="n">
        <v-container fluid>
          <v-row v-if="n === 1" >
              <div class="mx-auto">
                <my-random @likeDog="likeDog"/>
              </div>
          </v-row>
          <v-row class="d-flex flex-column" v-if="n === 2" >
            <my-search @getDogList="getDogList" />
              <div class="mx-auto" v-if="dogListByBreed">
                <my-card @likeDog="likeDog" :dogListByBreed="dogListByBreed" />
              </div>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</div>
<my-nav></my-nav>
</template>

<script>
import MyNav from '@/components/MyNav.vue';
import MySearch from '@/components/MySearch.vue';
import MyCard from '@/components/MyCard.vue';
import MyRandom from '@/components/MyRandom.vue';
export default {
  data() {
    return {
      dogListByBreed: null,
      user: null,
      tab: null
    }
  },
  components: {
    MyNav, MySearch, MyCard, MyRandom
  },
  methods: {
    getDogList(value) {
      this.dogListByBreed = value
    },
    likeDog(dog) {
      let currentUserData = JSON.parse(localStorage.getItem(this.user))
      if (!currentUserData.includes(dog)) {
        currentUserData.push(dog)
        localStorage.setItem(this.user, JSON.stringify(currentUserData))
        this.$store.commit('SET_FAVORITES_DATA', dog)
      } else {
        this.$store.commit('DELETE_FAVORITES_DATA', dog)
      }
    }
  },
  mounted() {
    this.user = localStorage.getItem('currentUser')
  }
}
</script>