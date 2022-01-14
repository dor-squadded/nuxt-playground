<template>
	<div>
		<v-row justify="center" align="center">
			<h1>Welcome to your playground!</h1>
		</v-row>
		<v-row>
			<p>Things to do:</p>
		</v-row>
		<v-row>
			<ul>
				<li>Create a node server</li>
				<li>Get an actual ANSWER from the server</li>
				<li>Set up a MongoDB... DB</li>
			</ul>
		</v-row>
		<v-row>
			<p>
				This is a proof that I get some data: {{ list.length }}
			</p>
		</v-row>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	name: 'IndexPage',
	computed: {
		...mapState({ list: 'list' }),
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		...mapActions(['fetchData']),
	},
};
</script>
