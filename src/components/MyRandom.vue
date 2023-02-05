<template>
    <div class="d-flex flex-column align-center">
        <v-radio-group v-model="radios" mandatory inline>
            <v-radio label="Dog" value="dog"></v-radio>
            <v-radio label="Cat" value="cat"></v-radio>
        </v-radio-group>
        <v-img class="my-8 bg-white" width="300" :aspect-ratio="1" :src="randomDog" cover></v-img>
        <div class="d-flex align-center justify-center">
            <v-btn class="mr-8" @click="nextDog" color="pink" block>Next {{ this.radios }}</v-btn>
            <v-btn @click="likeDog(randomDog)" fab dark small color="pink">
                <v-icon dark>
                    mdi-heart
                </v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            randomDog: null,
            radios: 'dog',
        }
    },
    methods: {
        nextDog() {
            if (this.radios === 'dog') {
                axios.get('https://dog.ceo/api/breeds/image/random').then(res => this.randomDog = res.data.message)
            } else if (this.radios === 'cat') {
                axios.get('https://api.thecatapi.com/v1/images/search').then(res => this.randomDog = res.data[0].url)
            }
        },
        likeDog(value) {
            this.$emit('likeDog', value)
        }
    },
    mounted() {
        axios.get('https://dog.ceo/api/breeds/image/random').then(res => this.randomDog = res.data.message)
    }
}
</script>

<style lang="scss" scoped>

</style>