<template>
	<div>
		<h3>Start playing</h3>
		<div v-for="task in tasks" :key="task">
			<TaskEntry :task="task" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TaskEntry from '../components/TaskEntry.vue';
export default {
	name: 'IndexPage',
	components: {
		TaskEntry,
	},
	data() {
		return {
			userSearchString: '',
			tasks: ['Create pagination of users search'],
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
