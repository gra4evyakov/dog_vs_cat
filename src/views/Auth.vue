<template>
    <div class="h-100 d-flex flex-column justify-center align-center">
        <v-avatar class="mb-4" image="../assets/dog_vs_cat.jpg" size="200"></v-avatar>
        <h1>Dogs</h1>
        <h3 class="mb-4">or a few cats</h3>
        <MyForm @updateValue="loginUser" />
    </div>
</template>

<script>
import { users } from '../users'
import MyForm from '@/components/MyForm.vue';
export default {
    data() {
        return {
            login: '',
            password: '',
        }
    },
    components: {
        MyForm
    },
    methods: {
        loginUser(value) {
            this.login = value.login
            this.password = value.password
            if (users.find((user) => user.login === this.login && user.password === this.password)) {
                let token = Math.random().toString(36).slice(2);
                localStorage.setItem('accessToken', token)
                localStorage.setItem('currentUser', this.login.toString())
                let array = []
                if (!localStorage.getItem(this.login.toString())) { localStorage.setItem(this.login.toString(), JSON.stringify(array)) }
                this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped>
</style>