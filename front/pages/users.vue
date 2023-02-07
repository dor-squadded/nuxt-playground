<template>
	<div>
		<v-text-field v-model="userSearchString" />
		<v-btn :loading="loading" @click="getUsers"> click to get data </v-btn>
		<v-btn :disabled="!(users && users.length === 20)" :loading="loading" @click="getNextUsers">
			get next users
		</v-btn>
		<v-btn :disabled="!clickedNextBtn" :loading="loading" @click="getPrevUsers">
			get prev users
		</v-btn>
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
			clickedNextBtn: 0,
		};
	},
	computed: {
		...mapState(['users', 'loading']),
	},
	methods: {
		...mapActions(['fetchUsers', 'fetchNextUsers']),
		getUsers() {
			this.fetchUsers({ userSearchString: this.userSearchString });
		},
		getNextUsers() {
			this.fetchNextUsers({ userSearchString: this.userSearchString });
			this.clickedNextBtn++;
		},
		getPrevUsers() {
			this.fetchUsers({ userSearchString: this.userSearchString, getPrevUsers: true });
			this.clickedNextBtn--;
		},
	},
};
</script>
