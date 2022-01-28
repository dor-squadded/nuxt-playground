<template>
	<div>
		{{ task }}
	</div>
</template>

<script>
export default {
	props: {
		task: {
			type: String,
			default: '',
		},
	},
};
</script>

<style></style>
