<template>
	<VNavigationDrawer v-model="drawer" app>
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
	</VNavigationDrawer>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true,
		},
		drawerActive: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		drawer: {
			get: function () {
				return this.drawerActive;
			},
			set: function (newValue) {
				this.$emit('update:drawerActive', newValue);
			},
		},
	},
};
</script>

<style></style>
