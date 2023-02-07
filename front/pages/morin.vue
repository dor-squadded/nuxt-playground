<template>
	<div>
		<h3>How are you, Morin?</h3>
		<div v-for="task in tasks" :key="task">
			<TaskEntry :task="task" />
		</div>
	</div>
</template>

<script>
import TaskEntry from '../components/TaskEntry.vue';
export default {
	name: 'MorinTasks',
	components: {
		TaskEntry,
	},
	data() {
		return {
			tasks: [
				'ניקוי מס',
				'להכין חטיפי חלבון',
			],
		};
	},
};
</script>
