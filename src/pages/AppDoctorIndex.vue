<script>

import UsersList from "../components/UsersList.vue";
import { store } from '../store';


export default {
	data() {
		return {
			searchString: "",
			store,
		};
	},

	methods: {

		async executeSearch() {
			this.store.search = this.searchString;
			await new Promise(() => { });
			this.$router.push({
				name: "user.index",
				query: { q: this.searchString },
			});
		},


		clearSearch() {
			this.store.search = null;
			this.$router.push({ query: { ...this.$route.query, q: null } });
		},

		resetUserView() {
			this.store.search = null;
			this.$router.push({ name: "users", query: {} });
		},
	},

	created() {
		this.clearSearch();
	},

	watch: {
		$route() {
			this.searchString = "";
			this.store.search = null;
		},
	},

	components: {
		UsersList,
	},

};
</script>

<template>
	<h2 class="text-center list fw-bold">Qui trovi tutti i nostri medici</h2>
	<div class="container">

		<form class="d-flex w-100 mt-4" role="search" @submit.prevent="executeSearch">

			<div class="row"></div>
			<input class="form-control col-6" type="search" placeholder="Inserisci nome del Dottore che cerchi"
				aria-label="Cerca qui" name="q" v-model="searchString" />
			<button class="btn ms-2 card_2" type="submit">
				<font-awesome-icon :icon="['fas', 'magnifying-glass']" class="pe-1" /> Cerca
			</button>

		</form>
	</div>
	<UsersList />
</template>

<style lang="scss" scoped>
.list {
	margin-top: 8rem;
	margin-bottom: 2rem;
}


.card_2 {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8rem;
	height: 2.5rem;
	border: 2px solid #072c45;
	text-decoration: none;
	font-size: .7rem;
	text-transform: uppercase;
	transition: all .5s ease;
	background: #0c5587;
	color: #ffffff;

	&:hover {
		background: #ffffff;
		color: #0c5587;
	}
}

@media (max-width: 1000px) {

	h2 {
		font-size: 1.3rem;
	}

	.container {
		width: 70vw;
	}
}
</style>