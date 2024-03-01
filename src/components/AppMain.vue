<script >
import axios from 'axios';
import { store } from '../store.js';

export default {
    components: {

    },
    data() {
        return {
            store,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.endpoint}/api/projects`).then((response) => {
                console.log(response.data.results)
            })
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *;
</style>
