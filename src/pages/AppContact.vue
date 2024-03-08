<script>
import axios from 'axios';
import { store } from '../store.js';
export default {

    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            description: '',
            errors: '',
        }
    },
    created() {

    },
    methods: {
        sendForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                description: this.description
            }

            axios.post(`${this.store.endpoint}/api/contact`, data).then((response) => {

                if (response.data.succes) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.description = '';

                    this.$router.push({
                        name: 'thank-you',
                    })

                } else {
                    this.errors = response.data.errors
                }

            })
        }
    }

}
</script>

<template>
    <form @submit.prevent="sendForm()" method="post">
        <div class="row justify-content-center py-5">
            <div class="col-6">
                <div class="row">
                    <div class="col py-3">
                        <input v-model="name" type="text" name="name" id="name" class="form-control"
                            placeholder="First name" required>
                        <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                            {{ error }} </p>

                    </div>
                    <div class="col py-3">
                        <input type="text" v-model="surname" name="surname" id="surname" class="form-control"
                            placeholder="Last name" required>
                        <p v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">
                            {{ error }}
                        </p>
                    </div>
                    <div class="col py-3">
                        <input type="text" v-model="email" class="form-control" placeholder="Email" name="email"
                            id="email" required>
                        <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                            {{ error }}</p>
                    </div>
                    <div class="py-3">

                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" v-model="description" name="description" id="description"
                            rows="3"></textarea>
                        <p v-for="(error, index) in errors.description" :key="`message-error-${index}`"
                            class="text-danger">{{ error }}</p>
                    </div>

                    <button type="submit" class="btn btn-primary"> Invia</button>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *;
</style>
