<script >
import axios from 'axios';
import { store } from '../store.js';
import Project from './Project.vue';

export default {
    components: {
        Project,
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number) {
            axios.get(`${this.store.endpoint}/api/projects`, {
                params: {
                    page: page_number
                }
            }).then((response) => {

                // Applichiamo il valore della richiesta all array
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;



            })
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">

            <Project v-for="project in projects" :key="index" :project="project" />

            <div class="col-12">
                <div class="page_button_container">
                    <div>
                        <button :class="currentPage == 1 ? 'disabled' : ''" @click=" getProjects(currentPage - 1)"
                            class="btn btn-secondary"><i class="bi bi-chevron-left"></i></button>
                    </div>
                    <div>
                        <button :class="currentPage == lastPage ? 'disabled' : ''" @click="getProjects(currentPage + 1)"
                            class="btn btn-secondary"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/generals.scss' as *;

.page_button_container {
    display: flex;
    justify-content: center;

    button {
        margin: 5px;
    }

}
</style>
