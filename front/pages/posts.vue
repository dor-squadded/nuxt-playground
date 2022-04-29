<template>
	<div>
		<v-btn :loading="loading" @click="fetchPosts(lastPostCreationTs)"> click to get sample </v-btn>
		{{ lastPostCreationTs }}
		<div v-for="post in posts" :key="post._id">
			<v-lazy>
				<p>{{ post.postTitle }}</p>
			</v-lazy>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	name: 'IndexPage',
	computed: {
		...mapState(['posts', 'loading']),
		lastPostCreationTs() {
			return this.posts[this.posts.length - 1]?.creationTs;
		},
	},
	methods: {
		...mapActions(['fetchPosts']),
	},
};
</script>
