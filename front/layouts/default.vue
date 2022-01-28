<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app>
			<v-list nav>
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					@click="$router.push(item.linkTo)"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
export default {
	name: 'DefaultLayout',
	data() {
		return {
			drawer: false,
			items: [
				{ title: 'Home', icon: 'mdi-home', linkTo: '/' },
				{ title: 'Search Users', icon: 'mdi-help-box', linkTo: '/searchUsers' },
			],
			headersMap: {
				index: 'Welcome to the playground',
				searchUsers: 'Search for users',
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
