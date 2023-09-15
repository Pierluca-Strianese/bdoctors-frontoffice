<script>
export default {
	data() {
		return {
			specializationId: null,
		};
	},

	props: {
		arrSpecializations: {
			type: Array,
			required: true,
		},

	},

	watch: {
		arrSpecializations() {
			this.specializationId = this.arrSpecializations.length
				? this.arrSpecializations[0].id
				: null;
		},




	},



}
</script>


<template>
	<div class="d-flex list my-5">
		<form class="">
			<h4 class="mt-2 mb-4 text-center">Seleziona la specializzazione che cerchi</h4>
			<div class="d-flex align-items-center">
				<label for="type">Specializzazioni:</label>
				<select id="specialization" class="form-select ms-2"
					@change="$emit('changeSpecialization', specializationId)" v-model="specializationId">
					<option value="">Tutti</option>
					<option v-for="specialization in arrSpecializations" :key="specialization.id"
						:value="specialization.id">
						{{ specialization.name }}
					</option>
				</select>
			</div>
		</form>

		<!-- <form class="">
			<h4 class="mt-2 mb-4 text-center"></h4>
			<div class="d-flex align-items-center">
				<label for="type">Voto:</label>
				<select id="specialization" class="form-select ms-2"
					@change="$emit('changeSpecialization', specializationId)" v-model="specializationId">
					<option value="">Tutti</option>
					<option>0 - nessuna recensione </option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
		</form> -->
	</div>
</template>


<style lang="scss" scoped>
@media (max-width: 1000px) {

	h4 {
		font-size: 1.3rem;
	}
}
</style>
