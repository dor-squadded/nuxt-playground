<template>
	<v-app>
		<v-navigation-drawer app>
			wat v-navigation-drawer
		</v-navigation-drawer>
		<v-app-bar app>
			wat v-app-bar
		</v-app-bar>
		<v-main>
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
};
</script>
