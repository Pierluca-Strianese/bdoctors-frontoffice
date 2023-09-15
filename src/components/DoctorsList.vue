<script>
import axios from 'axios';
import Appcard from './Appcard.vue'
import { store } from '../store';
export default {
    components: {
        Appcard,
    },

    data() {
        return {
            arrUsers: [],
            store,
        };
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
            this.getUsers();
        },

        getUsers() {

            axios
                .get(this.store.baseUrl + 'api/users', {
                    params: {
                        page: this.currentPage,
                        specialization: this.specializationId,
                    },
                })
                .then(response => {
                    this.arrUsers = response.data.results.data;
                    this.nPages = response.data.results.last_page;
                });
        },

    },
    created() {
        this.getUsers();
    },
}
</script>

<template>
    <div class="d-flex justify-content-center my-5 flex-wrap">
        <div v-for="user in arrUsers" :key="user.id">
            <!-- Verifica se l'utente ha un dottore associato -->
            <Appcard v-if="user.doctor && user.doctor.promotions.length >= 1" :user="user" :objUser="user" class="mb-4" />
        </div>
    </div>
</template>


<style lang="scss" scoped></style>