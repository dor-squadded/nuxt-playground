<template>
	<div>
		<v-text-field v-model="userSearchString" />
		<v-btn @click="fetchData(userSearchString)"> click to get data </v-btn>
		<div v-for="user in users" :key="user._id">
			<v-lazy>
				<p>{{ user.name }}</p>
			</v-lazy>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	name: 'IndexPage',
	data() {
		return {
			userSearchString: '',
		};
	},
	computed: {
		...mapState({ users: 'users' }),
	},
	methods: {
		...mapActions(['fetchData']),
	},
};
</script>
