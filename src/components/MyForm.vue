<template>
    <v-sheet width="300" class="mx-auto">
        <v-form class="d-flex flex-column items-center" fast-fail @submit.prevent="update">
            <v-text-field :color="color" v-model="user.login" label="Login"></v-text-field>
            <v-text-field :color="color" v-model="user.password" label="Password"></v-text-field>
            <v-btn @click="showPass = !showPass" variant="text">Forgot login and password?</v-btn>
            <h3 class="text-center" v-if="showPass">login: admin / password: admin</h3>
            <v-btn :color="color" type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>
<script>
export default {
    data() {
        return {
            user: {
                login: '',
                password: '',
            },
            color: 'pink',
            showPass: false
        }
    },
    methods: {
        update() {
            this.$emit('updateValue', this.user)
        }
    }
}
</script>