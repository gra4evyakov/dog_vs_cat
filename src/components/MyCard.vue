<template>
    <div class="d-flex flex-column align-center">
        <v-img class="my-8 bg-white" width="300" :aspect-ratio="1" :src="dogListByBreed[number]" cover></v-img>
        <div class="d-flex align-center justify-center">
            <v-btn class="mr-8" @click="nextDog" color="pink" block >Next dog</v-btn>
            <v-btn @click="likeDog(dogListByBreed[number])" fab dark small color="pink">
                <v-icon dark>
                    mdi-heart
                </v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['dogListByBreed'],
    data() {
        return {
            number: 0
        }
    },
    methods: {
        nextDog() {
            this.number = this.number + 1
        },
        likeDog(value) {
            this.$emit('likeDog', value)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>