<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app>
			wat v-navigation-drawer
		</v-navigation-drawer>
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
		</v-app-bar>
		<v-main ref="main">
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<v-footer app>
			wat footer
		</v-footer>
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
	data() {
		return {
			drawer: false,
		};
	},
};
</script>
