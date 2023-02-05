<template>
  <v-select color="pink" v-model="select" :hint="`Breed: ${select}`" :items="breeds" item-title="state"
    item-value="abbr" label="Select" persistent-hint return-object single-line variant="solo">
  </v-select>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      select: 'pug',
      breeds: [],
      dogsList: []
    }
  },
  emits: ['getDogList'],
  methods: {
    getDogList() {
      this.$emit('getDogList', this.dogsList)
    },
  },
  mounted() {
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => this.breeds = Object.keys(res.data.message))
  },
  watch: {
    async select() {
      await axios.get(`https://dog.ceo/api/breed/${this.select}/images`).then(res => this.dogsList = res.data.message)
      this.getDogList()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>