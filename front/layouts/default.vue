<template>
	<v-app>
		<NavigationDrawer :items="items" :drawer-active.sync="drawerActive" />
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawerActive = !drawerActive" />
		</v-app-bar>
		<v-main ref="main">
			<v-container>
				<div>
					<h1>{{ pageHeader }}</h1>
				</div>
				<Nuxt />
			</v-container>
		</v-main>
		<v-footer app>wat footer</v-footer>
	</v-app>
</template>

<script>
import NavigationDrawer from '../components/DefaultLayout/NavigationDrawer.vue';
export default {
	name: 'DefaultLayout',
	components: {
		NavigationDrawer,
	},
	data() {
		return {
			drawerActive: false,
			items: [
				{ title: 'Home', icon: 'mdi-home', linkTo: '/' },
				{ title: 'Hello Morin', icon: 'mdi-bookmark-music', linkTo: '/morin' },
				{ title: 'Users', icon: 'mdi-help-box', linkTo: '/users' },
				{ title: 'Posts', icon: 'mdi-receipt', linkTo: '/posts' },
			],
			headersMap: {
				index: 'Welcome to the playground',
				users: 'Search for users',
				posts: 'See all posts',
			},
		};
	},
	computed: {
		pageHeader() {
			const currPage = this.$route.name;
			return this.headersMap[currPage];
		},
	},
};
</script>
